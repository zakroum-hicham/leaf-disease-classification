import numpy as np
from PIL import Image
from io import BytesIO
import keras


def file_to_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return np.expand_dims(image, 0)

def get_model(a):
    if a == "potato":
        return keras.models.load_model(".\\app\\app\\models\\1.keras")
    elif a == "pepper":
        return keras.models.load_model(".\\app\\app\\models\\pepper.keras")
    elif a == "tomato":
        return keras.models.load_model(".\\app\\app\\models\\tomato1.keras")
def get_classes(a):
    if a == "potato":
        return ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']
    elif a == "pepper":
        return ["Pepper__bell___Bacterial_spot","Pepper__bell___healthy"]
    elif a == "tomato":
        return ["Tomato__Target_Spot","Tomato__Tomato_mosaic_virus","Tomato__Tomato_YellowLeaf__Curl_Virus","Tomato_Bacterial_spot","Tomato_Early_blight","Tomato_healthy","Tomato_Late_blight","Tomato_Leaf_Mold","Tomato_Septoria_leaf_spot","Tomato_Spider_mites_Two_spotted_spider_mite"]