from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html')


@app.after_request
def set_csp(response):
  response.headers['Content-Security-Policy'] = (
      "default-src 'self';"
      "img-src 'self' placecats.com;"
      "script-src 'self' 'unsafe-inline' unpkg.com;"
      "style-src 'self' 'unsafe-inline';"
  )
  return response


app.run(debug=True)
