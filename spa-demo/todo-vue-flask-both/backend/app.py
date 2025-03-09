from flask import Flask, request
from flask_cors import CORS
from models import db, Todo
from utils import better_jsonify

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'

CORS(app)

db.init_app(app)
with app.app_context():
  db.create_all()


@app.route('/')
def index():
  return "hello from flask server"


@app.route('/api/get-todos')
def get_todos():
  return better_jsonify(Todo.query.all())


@app.route('/api/toggle-done/<int:id>')
def toggle_done(id):
  todo = Todo.query.get(id)
  todo.is_done = not todo.is_done
  db.session.commit()
  return better_jsonify(Todo.query.all())


@app.route('/api/toggle-star/<int:id>')
def toggle_star(id):
  todo = Todo.query.get(id)
  todo.is_star = not todo.is_star
  db.session.commit()
  return better_jsonify(Todo.query.all())


@app.route('/api/delete/<int:id>')
def delete(id):
  todo = Todo.query.get(id)
  db.session.delete(todo)
  db.session.commit()
  return better_jsonify(Todo.query.all())


@app.route('/api/add-todo', methods=['POST'])
def add_todo():
  todo_input = request.form.get('todoInput')
  db.session.add(Todo(text=todo_input))
  db.session.commit()
  return better_jsonify(Todo.query.all())


app.run(debug=True)
