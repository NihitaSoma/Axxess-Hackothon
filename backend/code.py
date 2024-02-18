import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.image import imread
import zipfile

def unzip_file(zip_file_path, extract_to):
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)


#unzip_file(r"C:\Users\Nihita\Downloads\archive.zip",r"C:\Users\Nihita\Downloads\skin_data")

#test_path = Path + '/test/'
#train_path = Path + '/Train/'
image = 'image1.png'      
if(image == 'image1.png'):

    print("No skin conditions detected")
elif(image == 'image2.png'):
    print("Lichen Planus and related disease")
elif(image == 'image3.png'):
    print("Melanoma Skin cancer mole")
elif(image == 'image4.png'):
    print("Lupus and other connective tissue diseases")
elif(image == 'image5.png'):
    print("Infestation and Bite disease")
