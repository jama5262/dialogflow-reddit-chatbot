from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error
from os import environ
import re


def detect_intent(req):
    if not isQueryValid(req):
        return error(404, "Please make sure to have a valid param in the url, that is the 'query' param")
    elif not isQueryEmpty(req):
        return error(422, "Looks like you didn't pass anything")

    res = getReponseFromDialogflow(req.args.get("query"))

    

    return success(200, res)


def getReponseFromDialogflow(query):
    import dialogflow_v2 as dialogflow
    session_client = dialogflow.SessionsClient()

    session = session_client.session_path(
        environ.get("DIALOGFLOW_PROJECT_ID"), "123456789")
    print('Session path: {}\n'.format(session))

    text_input = dialogflow.types.TextInput(text=query, language_code="en-US")
    query_input = dialogflow.types.QueryInput(text=text_input)
    response = session_client.detect_intent(
        session=session, query_input=query_input)

    numberReg = re.search(
        "\\d+", str(response.query_result.parameters.fields["number"]))

    def stringReg(value):
        return re.search("(?<=string_value: \\\").*(?=\\\"\\n)", str(response.query_result.parameters.fields[value]))

    return {
        "intent": response.query_result.intent.display_name,
        "fullfillment_text": response.query_result.fulfillment_text,
        "params": {
            "number": numberReg.group(0) if numberReg is not None else 0,
            "reddit-category": stringReg("reddit-category").group(0) if stringReg("reddit-category") is not None else "",
            "reddit-type": stringReg("reddit-type").group(0) if stringReg("reddit-type") is not None else "",
            "subreddit": stringReg("subreddit").group(0) if stringReg("subreddit") is not None else ""
        }
    }
