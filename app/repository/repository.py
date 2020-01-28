from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error
from os import environ
import re
import requests


def detect_intent(req):
    try:
        if not isQueryValid(req):
            raise ValueError(
                404, "Please make sure to have a valid param in the url, that is the 'query' param")
        elif not isQueryEmpty(req):
            raise ValueError(422, "Looks like you didn't pass anything")
        dialogflowRes = getReponseFromDialogflow(req.args.get("query"))
        redditRes = getResponseFromReddit(dialogflowRes)
        return success(200, redditRes)
    except ValueError as valueError:
        return error(valueError.args[0], valueError.args[1])


def getReponseFromDialogflow(query):
    import dialogflow_v2 as dialogflow
    session_client = dialogflow.SessionsClient()

    session = session_client.session_path(
        environ.get("DIALOGFLOW_PROJECT_ID"), "123456789")

    text_input = dialogflow.types.TextInput(text=query, language_code="en-US")
    query_input = dialogflow.types.QueryInput(text=text_input)
    response = session_client.detect_intent(
        session=session, query_input=query_input)

    numberReg = re.search(
        "\\d+", str(response.query_result.parameters.fields["number"]))

    def stringReg(key, defaultVal):
        if response.query_result.intent.display_name != "Dialogflow Reddit Intent":
            return defaultVal
        regex = re.search("(?<=string_value: \\\").*(?=\\\"\\n)",
                          str(response.query_result.parameters.fields[key]))
        if regex.group(0):
            return regex.group(0)
        return defaultVal

    return {
        "intent": response.query_result.intent.display_name,
        "fullfillment_text": response.query_result.fulfillment_text,
        "params": {
            "number": numberReg.group(0) if numberReg is not None else "3",
            "reddit-category": stringReg("reddit-category", "top"),
            "reddit-type": stringReg("reddit-type", ""),
            "subreddit": stringReg("subreddit", "r/all")
        }
    }


def getResponseFromReddit(dialogflowRes):
    if(dialogflowRes["intent"] != "Dialogflow Reddit Intent"):
        return {
            "fullfilment": dialogflowRes["fullfillment_text"],
            "customFullfilment": "",
            "bot": True,
        }

    url = ""
    params = {}

    if not dialogflowRes["params"]["reddit-type"]:
        url = "https://www.reddit.com/" + \
            dialogflowRes["params"]["subreddit"] + "/" + \
            dialogflowRes["params"]["reddit-category"] + ".json"
        params = {
            "limit": dialogflowRes["params"]["number"]
        }
    else:
        url = "https://www.reddit.com/" + \
            dialogflowRes["params"]["subreddit"] + "/search.json"
        params = {
            "limit": dialogflowRes["params"]["number"],
            "q": dialogflowRes["params"]["reddit-type"],
            "sort": dialogflowRes["params"]["reddit-category"],
            "restrict_sr": "1"
        }

    res = requests.get(url, params=params, headers={
                       'User-agent': 'your bot 0.1'}).json()
    if "error" in res:
        raise ValueError(422, {
            "fullfilment": "Oops 😬, sorry I didn't get that. If you passed a subreddit please make sure its valid and try again",
            "customFullfilment": "",
            "bot": True,
        })

    redditPosts = []
    for post in res["data"]["children"]:
        redditPosts.append({
            "title": post["data"]["title"],
            "url": post["data"]["permalink"],
            "subreddit": post["data"]["subreddit_name_prefixed"]
        })

    return {
        "fullfilment": dialogflowRes["fullfillment_text"],
        "customFullfilment": "",
        "bot": True,
        "redditPosts": redditPosts
    }
