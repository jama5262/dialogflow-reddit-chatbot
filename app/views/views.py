from flask import Blueprint, jsonify, request, render_template

views = Blueprint("views", __name__)


@views.route("", methods=["GET"])
def renderReactPage():
    return "React Page Here", 200


@views.route("chatbot", methods=["POST"])
@cross_origin()
def chatbot():
    return "Talk to chatbot"
