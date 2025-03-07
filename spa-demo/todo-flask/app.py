from flask import Flask, render_template, request, redirect

app = Flask(__name__)

todos = [
    'eat apple',
    'do yoga',
    'fly rockets',
    'walk on water',
    'smile'
]


@app.route('/')
def index():
  return render_template('index.html', todos=todos)


@app.route('/add-todo', methods=['POST'])
def add_todo():
  todo = request.form.get('todo')
  todos.append(todo)
  return redirect('/')


app.run(debug=True)
