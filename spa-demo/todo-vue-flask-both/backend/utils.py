from flask import jsonify


def better_jsonify(obj):
  # If obj is a list, convert each item to a dict
  if isinstance(obj, list):
    return jsonify([o.to_dict() for o in obj])

  # Convert single obj to a dict
  return jsonify(obj.to_dict())
