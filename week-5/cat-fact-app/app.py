from flask import Flask, jsonify
from random import randint
from flask_cors import CORS

cat_facts = [
    'cats are lovely',
    'big cats are scary',
    'lion is also a cat',
    'iitm has a lot of cats',
    'cats can see in dark'
]

app = Flask(__name__)
CORS(app)


@app.route('/fact')
def fact():
  fact = cat_facts[randint(0, len(cat_facts)-1)]
  return jsonify({
      "fact": fact,
      "length": len(fact)
  })


if __name__ == '__main__':
  app.run(debug=True)
