from dotenv import load_dotenv
import os 
import requests

load_dotenv()

ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
CANVAS_DOMAIN = 'https://feu.instructure.com/api/v1'
course_id = "104566" #example course id

assignment_endpoint = f'{CANVAS_DOMAIN}/courses/{course_id}/assignments?access_token={ACCESS_TOKEN}'

def get_assignment(endpoint):
    response = requests.get(endpoint)
    assignments = response.json()
    for a in assignments:
        print(a.get("name"))
        print(a.get("id"))
        print(a.get("due_at"))
        print("--------------------------------------")             
assignments = get_assignment(assignment_endpoint)
