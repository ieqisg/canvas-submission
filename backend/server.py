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

N8N_URL = os.getenv("NEXT_PUBLIC_N8N_URL")
PORT = os.getenv("PORT")

@app.route("/test")
def test():
    return f"URL: {N8N_URL}"

@app.route("/trigger-workflow", methods=["GET"])
def trigger_worlflow():
    try:
        response = requests.get(N8N_URL)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)
