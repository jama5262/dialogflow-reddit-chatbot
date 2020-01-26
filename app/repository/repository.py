from app.utils.validate import isQueryValid, isQueryEmpty
from app.utils.return_messages import success, error
import requests
from os import environ
import json


def detect_intent(req):
    if not isQueryValid(req):
        return error(404, "Please make sure to have a valid param in the url, that is the 'query' param")
    elif not isQueryEmpty(req):
        return error(422, "Looks like you didn't pass anything")
    return success(200, "This is ok")