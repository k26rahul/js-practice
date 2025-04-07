from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Message(db.Model):
  id = Column(Integer, primary_key=True, autoincrement=True)
  fromName = Column(String)
  toName = Column(String)
  body = Column(String)
