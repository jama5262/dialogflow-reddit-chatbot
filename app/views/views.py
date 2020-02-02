from flask import Blueprint, jsonify, request, render_template, make_response
from app.repository.repository import detect_intent
from flask_cors import cross_origin

views = Blueprint("views", __name__)


@views.route("")
def renderReactPage():
    return render_template('index.html'), 200


@views.route("chatbot")
@cross_origin()
def chatbot():
    response = detect_intent(request)
    return jsonify(response), response["status"]
