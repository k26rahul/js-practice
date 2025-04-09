from flask import Flask, jsonify, request
from sqlalchemy import text
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'
db = SQLAlchemy(app)


class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50))


with app.app_context():
  db.create_all()
  for i in range(1, 6):
    db.session.add(User(name=f'User{i}'))
  db.session.commit()


@app.route('/user/<user_id>')
def get_user_vuln(user_id):
  # DO NOT DO THIS
  query = text(f"SELECT * FROM user WHERE id=:user_id")
  result = db.session.execute(query, {"user_id": user_id}).fetchall()
  return jsonify([dict(row._mapping) for row in result])


app.run(debug=True)
