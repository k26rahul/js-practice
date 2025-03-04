from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
  return render_template('index.html')


@app.route('/api/<page_name>')
def get_page(page_name):
  return render_template(f'pages/{page_name}.html')


app.run(debug=True)
