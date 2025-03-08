from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = {
    0: {"text": "eat apple", "is_done": True, "is_star": True},
    1: {"text": "go to the moon", "is_done": False, "is_star": False},
    2: {"text": "wake up at 7am", "is_done": False, "is_star": False},
}


@app.route('/')
def index():
  return "hello from flask server"


@app.route('/api/get-todos')
def get_todos():
  return jsonify(todos)


@app.route('/api/toggle-done/<int:id>')
def toggle_done(id):
  todos[id]['is_done'] = not todos[id]['is_done']
  return jsonify(todos)


@app.route('/api/toggle-star/<int:id>')
def toggle_star(id):
  todos[id]['is_star'] = not todos[id]['is_star']
  return jsonify(todos)


@app.route('/api/delete/<int:id>')
def delete(id):
  del todos[id]
  return jsonify(todos)


app.run(debug=True)
