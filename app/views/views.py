from flask import Blueprint, jsonify, request, render_template
from app.repository.repository import detect_intent

views = Blueprint("views", __name__)


@views.route("", methods=["GET"])
def renderReactPage():
    return "React Page Here", 200


@views.route("chatbot", methods=["POST"])
# @cross_origin()
def chatbot():
    response = detect_intent(request)
    return jsonify(response), response["status"]
