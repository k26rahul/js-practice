from flask import Flask, render_template, redirect, request

app = Flask(__name__)


@app.route('/')
def index():
  return "hello from flask server"


app.run(debug=True)
