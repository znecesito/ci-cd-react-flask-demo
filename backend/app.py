from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

@app.route("/api")
def hello():
    return jsonify({"message": "Hello Zack! Next step coming up"})

@app.route("/api/status")
def status():
    return jsonify({"status": "All systems operational."})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
