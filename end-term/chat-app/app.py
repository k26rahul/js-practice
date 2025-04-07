from flask import Flask, jsonify, request
from models import db, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'
db.init_app(app)
with app.app_context():
  db.create_all()


@app.route('/send', methods=['POST'])
def send():
  data = request.get_json()
  db.session.add(Message(
      body=data.get('message')
  ))
  db.session.commit()
  return jsonify(
      success=True,
  )


@app.route('/get-all-messages')
def get_all_messages():
  messages = Message.query.all()
  return jsonify(
      success=True,
      messages=[{"body": message.body} for message in messages]
  )


if __name__ == '__main__':
  app.run(debug=True)
