from flask import Flask, render_template, request, redirect

app = Flask(__name__)

todos = {
    0: {"text": 'eat apple', "isDone": False, "isStar": False},
    1: {"text": 'eat banana', "isDone": False, "isStar": False},
}
nextTodoId = 2


@app.route('/')
def index():
  return render_template('index.html', todos=todos)


@app.route('/add-todo', methods=["POST"])
def add_todo():
  global nextTodoId
  todo = request.form.get('todo')
  todos[nextTodoId] = {"text": todo, "isDone": False, "isStar": False}
  nextTodoId += 1
  return redirect('/')


@app.route('/toggle-done/<int:id>')
def toggle_done(id):
  todos[id]["isDone"] = not todos[id]["isDone"]
  return redirect('/')


@app.route('/toggle-star/<int:id>')
def toggle_star(id):
  todos[id]["isStar"] = not todos[id]["isStar"]
  return redirect('/')


@app.route('/delete/<int:id>')
def delete(id):
  del todos[id]
  return redirect('/')


app.run(debug=True)
