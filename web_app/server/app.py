from flask import Flask,request,jsonify
from flask_cors import CORS,cross_origin
from joblib import load
import numpy as np
app=Flask(__name__)
CORS(app,support_credentials=True)
@app.route('/')
def home():
    return('home page flask')
@app.route('/',methods=['POST','GET'])
@cross_origin()
def posted():
    #  print('posteddd')
    #  print(request.get_json(force=True).get('temperature'))
     inputs=request.get_json(force=True)
     print(inputs)
    #  features=[
    #      inputs.get('nitrogen'),
    #      inputs.get('phosporus'),
    #      inputs.get('potassium'),
    #     #  inputs.get('temperature'),
    #      inputs.get('ph'),
    #      inputs.get('rainfall'),
    #      inputs.get('temperature'),
    #      inputs.get('area'),
    #      inputs.get('state'),
    #      inputs.get('crop'),
    #      inputs.get('cropType')
    #  ]
     features=[0]*97
     features[0]=float(inputs.get('nitrogen'))
     features[1]=float(inputs.get('phosporus'))
     features[2]=float(inputs.get('potassium'))
     features[3]=float(inputs.get('ph'))
     features[4]=float(inputs.get('rainfall'))
     features[5]=float(inputs.get('temperature'))
     features[6]=float(inputs.get('area'))
     features[int(inputs.get('state'))]=1
     features[int(inputs.get('crop'))]=1
     features[int(inputs.get('season'))]=1
    
     
     features=np.array(features).reshape(1,-1)
     model=load('CropYieldModel.joblib')
     output=model.predict(features)
     print('predicteddddd value',output[0])
    #  data = {'value': 'Hello, React!'}
     return(jsonify(output[0]));
if __name__ == '__main__':
    app.run(debug=True,port=8080)