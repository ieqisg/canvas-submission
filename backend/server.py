#source venv/bin/activate

from dotenv import load_dotenv
from flask import Flask, jsonify, g
from flask_cors import CORS
import requests
import os

load_dotenv()
app = Flask(__name__)
CORS(app)  # allow all origins, or configure specific ones

# n8n webhook URL
CANVAS_TOKEN = os.getenv("NEXT_PUBLIC_CANVAS_TOKEN")
PORT = os.getenv("PORT")

CANVAS_URL = os.getenv("NEXT_PUBLIC_CANVAS_URL")

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

@app.route("/test")
def test():
    
    return "test" 

    

@app.route("/all-assignments")
def all_assignments():
    assignments = []
    assignments.clear()
    assignments_sort = {}
    for course_name, course_id in COURSES.items():
        response = requests.get(f"{CANVAS_URL}/{course_id}/assignments", headers=headers_payload)
        assignments.extend(response.json())
    
        formatted = [{
            "course_id": assignment.get("course_id"),
            "assignment_id": assignment.get("id"),
            "name": assignment.get("name"),
            "description": assignment.get("description"),
            "created_at": assignment.get("created_at"),
            "due_at": assignment.get("due_at"),
            "status": assignment.get("has_submitted_submissions"),
            "type": assignment.get("submission_types")
        
            }
            for assignment in assignments
        ]  
        assignments_sort[course_name] = formatted

    return assignments_sort




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
