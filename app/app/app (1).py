from flask import Flask, render_template, request,jsonify
import numpy as np
from PIL import Image
from io import BytesIO
from utils import file_to_image,get_model,get_classes
from werkzeug.utils import secure_filename
import os
import uuid

app = Flask(__name__)

@app.route('/', methods=["GET"])
def home():

    return render_template("index.html")

@app.route("/api/v1/potato/v1",methods=['POST'])
def potato():
    print(request)
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    image_file = request.files['image']
    r = image_file.read()
    img = Image.open(BytesIO(r))
    
    # Convert the file to an image
    image = file_to_image(r)

    # pass the data too the model
    prediction = get_model().predict(image)
    predicted_class = get_classes("potato")[np.argmax(prediction[0])]
    confidence = np.max(prediction[0])
    # Return the predicted class and the confidence value
    if image_file:
            filename = secure_filename(image_file.filename)
            name = str(uuid.uuid4()) + os.path.splitext(filename)[1]
            filepath = os.path.join(".\\app\\static\\uploads", name)
            img = img.resize((256,256))
            img.save(filepath)
            return render_template('prediction.html',predicted_class=predicted_class,confidence=np.round(confidence,2),imagename=name)



@app.route("/api/v1/pepper/v1",methods=['POST'])
def pepper():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    image_file = request.files['image']
    
    # Convert the file to an image
    image = Image.open(BytesIO(image_file.read()))

    # You can now process the image as needed

    # Example: Return the image size
    width, height = image.size
    return jsonify({'width': width, 'height': height})

@app.route("/api/v1/tomato/v1",methods=['POST'])
def tomato():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    image_file = request.files['image']
    
    # Convert the file to an image
    image = Image.open(BytesIO(image_file.read()))

    # You can now process the image as needed

    # Example: Return the image size
    width, height = image.size
    return jsonify({'width': width, 'height': height})



# Our main function which runs the Flask App
if __name__ == '__main__':
    app.run(debug=True)
