from flask import Flask, request, jsonify, make_response, render_template, redirect, url_for

app = Flask(__name__)

# landing page
@app.route("/")
def landing():
    return render_template('landing.html')

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)