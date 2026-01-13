#source venv/bin/activate

from dotenv import load_dotenv
from flask import Flask, jsonify
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
CANVAS_ASSIGNMENT_ENDPOINT_PROJMAN= f"{CANVAS_URL}/107540/assignments"

CANVAS_ASSIGNMENT_ENDPOINT_SE2= f"{CANVAS_URL}/106702/assignments"
CANVAS_ASSIGNMENT_ENDPOINT_PROGLANG= f"{CANVAS_URL}/107211/assignments"
CANVAS_ASSIGNMENT_ENDPOINT_IMAGE= f"{CANVAS_URL}/107237/assignments"
CANVAS_ASSIGNMENT_ENDPOINT_UTS= f"{CANVAS_URL}/107067/assignments"
CANVAS_ASSIGNMENT_ENDPOINT_MATH= f"{CANVAS_URL}/108132/assignments"
CANVAS_ASSIGNMENT_ENDPOINT_LINEAR= f"{CANVAS_URL}/108103/assignments"


headers_payload = {
        'Authorization': f"Bearer {CANVAS_TOKEN}" 
    }

@app.route("/get-assignments-projman")
def get_assignments_projman():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_PROJMAN,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        
        return [{
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


    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-se2")
def get_assignments_projman_se2():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_SE2,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-proglang")
def get_assignments_proglang():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_PROGLANG,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-image")
def get_assignments_image():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_IMAGE,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-uts")
def get_assignments_uts():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_UTS,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-math")
def get_assignments_math():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_MATH,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"

@app.route("/get-assignments-linear")
def get_assignments_linear():
    try:
        response = requests.get(
        CANVAS_ASSIGNMENT_ENDPOINT_LINEAR,
        headers=headers_payload
       
    ) 
        response.raise_for_status()
        assignments = response.json()
        return [{
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
    except Exception as err: 
        return f"Error occured: {err}"






if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
