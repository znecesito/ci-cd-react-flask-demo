from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)  # Port 10000 is a common Render default

