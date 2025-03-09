from sqlalchemy import Column, Integer, String, Boolean
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


class Todo(db.Model, SerializerMixin):
  id = Column(Integer, primary_key=True, autoincrement=True)
  text = Column(String, nullable=False)
  is_done = Column(Boolean, default=False)
  is_star = Column(Boolean, default=False)
