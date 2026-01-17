from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)

DATA_PATH = os.path.join(os.path.dirname(__file__), "api.json")

def _load_data():
    if not os.path.exists(DATA_PATH):
        return {"users": []}
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

@app.route("/login", methods=["POST"])
def login():
    user_data = request.get_json()
    username = user_data.get("username")
    password = user_data.get("password")
    data = _load_data()
    if not username or not password:
        return jsonify({"status": "error", "message": "Username and password required"}), 400
    for user in data.get("users", []):
        if user["username"] == username and user["password"] == password:
            return jsonify({"status": "success", "message": "Login successful"}), 200
    return jsonify({"status": "error", "message": "Invalid credentials"}), 401
        
@app.route("/register", methods=["POST"])
def register():
    user_data = request.get_json()
    username = user_data.get("username")
    password = user_data.get("password")
    data = _load_data()
    if not username or not password:
        return jsonify({"status": "error", "message": "Username and password required"}), 400
    for user in data.get("users", []):
        if user["username"] == username:
            return jsonify({"status": "error", "message": "Username already exists"}), 409
    new_user = {"username": username, "password": password}
    data["users"].append(new_user)
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    return jsonify({"status": "success", "message": "Registration successful"}), 201

if __name__ == "__main__":
    app.run(port=5000)