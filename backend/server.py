#source venv/bin/activate
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os

from pymongo import UpdateOne
from bson import ObjectId
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from pymongo.results import InsertManyResult
from datetime import datetime

load_dotenv()

CANVAS_TOKEN = os.getenv("NEXT_PUBLIC_CANVAS_TOKEN")
CANVAS_URL = os.getenv("NEXT_PUBLIC_CANVAS_URL")
PORT = os.getenv("PORT")
uri = os.getenv("MONGODB_URI")



headers_payload = {
        'Authorization': f"Bearer {CANVAS_TOKEN}" 
    }

COURSES = {
    "projman": 107540,
    "se2": 106702,
    "proglang": 107211,
    "image": 107237,
    "uts": 107067,
    "math": 108132,
    "linear": 108103
    }

app = Flask(__name__)
CORS(app)  # allow all origins, or configure specific ones

client = MongoClient(uri, server_api=ServerApi('1'))
db = client['canvasdb']
collection = db['canvas']


'''
@app.route("/test", methods=['POST'])
def test():
    data = request.json
    if not data:
        return "No JSON received", 400
    collection.insert_one(data)
    return "test"
'''


def clean_html(html):
    if not html:
        return ""
    soup = BeautifulSoup(html, "html.parser")

    # remove scripts and styles completely
    for tag in soup(["script", "style"]):
        tag.decompose()

    # get clean text
    return soup.get_text(separator=" ", strip=True)

@app.route("/get-all-assignments", methods=['POST', 'GET'])
def all_assignments():
    bulk =[]
    try:
        for course_name, course_id in COURSES.items():
            response = requests.get(f"{CANVAS_URL}/{course_id}/assignments", headers=headers_payload)
            assignments = response.json()
            for assignment in assignments:
                formatted = {
                "course_name": course_name,
                "course_id": assignment.get("course_id"),
                "assignment_id": assignment.get("id"),
                "name": assignment.get("name"),
                "description": clean_html(assignment.get("description")),
                "created_at": assignment.get("created_at"),
                "due_at": assignment.get("due_at"),
                "status": assignment.get("has_submitted_submissions"),
                "type": assignment.get("submission_types")
                }
                bulk.append(
                    UpdateOne(
                        {
                            f"{course_name}.assignment_id": {"$ne": formatted["assignment_id"]}
                        },
                        {
                            "$push": {f"{course_name}":  formatted}
                        }
                    )
                )
        if bulk:
                collection.bulk_write(bulk)
       
        return "Data inserted on db"

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
