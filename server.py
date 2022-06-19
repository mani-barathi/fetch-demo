from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app=app,origins="*")

# cors = CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500/"}})

# CORS - cross origin resource sharing

@app.route('/data/get',methods=['GET'])
def getData():
    data = { 'name' : 'john'}
    return jsonify(data)



@app.route('/data/post',methods=['POST'])
def postData():
    data = request.get_json()
    print(data)
    return jsonify(data)



if __name__ == "__main__":
    app.run(debug=True)