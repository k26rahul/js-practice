from flask import Flask, render_template, request, redirect
from models import db, Todo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'

db.init_app(app)
with app.app_context():
  db.create_all()


@app.route('/')
def index():
  todos = Todo.query.all()
  return render_template('index.html', todos=todos)


@app.route('/add-todo', methods=["POST"])
def add_todo():
  todo = request.form.get('todo')
  db.session.add(Todo(text=todo))
  db.session.commit()
  return redirect('/')


@app.route('/toggle-done/<int:id>')
def toggle_done(id):
  todo = Todo.query.filter_by(id=id).first()
  todo.is_done = not todo.is_done
  db.session.commit()
  return redirect('/')


@app.route('/toggle-star/<int:id>')
def toggle_star(id):
  todo = Todo.query.filter_by(id=id).first()
  todo.is_star = not todo.is_star
  db.session.commit()
  return redirect('/')


@app.route('/delete/<int:id>')
def delete(id):
  todo = Todo.query.filter_by(id=id).first()
  db.session.delete(todo)
  db.session.commit()
  return redirect('/')


app.run(debug=True)
