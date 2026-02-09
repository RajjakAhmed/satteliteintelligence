# 📡 SatelliteIntelligence  
### AI-Powered Satellite Image Land Classification System  

![Made with Python](https://img.shields.io/badge/Made%20With-Python-blue)  
![Deep Learning](https://img.shields.io/badge/Deep%20Learning-ResNet50-green)  
![Dataset](https://img.shields.io/badge/Dataset-NWPU--RESISC45-orange)  
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-purple)  
![Status](https://img.shields.io/badge/Project-Active-success)

---

## 🌍 Overview

**SatelliteIntelligence** is an AI-powered satellite image classification platform that predicts land-use categories such as:

🏙️ Residential • 🌲 Forest • 🌾 Farmland • 🏜️ Desert • 🌊 Water Bodies • 🏭 Industrial

The project uses a **ResNet-50 deep learning model** trained on the **NWPU-RESISC45 remote sensing dataset** to provide real-time geographic insights from satellite imagery.

---

## ✨ Key Features

✅ Upload satellite images for instant prediction  
✅ Multi-class land-use classification using **ResNet-50 CNN**  
✅ Confidence score output for every prediction  
✅ Works well on urban, forest, crop, and water regions  
✅ Stores only metadata (label + confidence) — no image storage for privacy  

---

## 🏷️ Supported Land Classes

The model can classify:

- 🏙️ Residential Areas  
- 🌲 Forest Regions  
- 🌾 Permanent Crop / Farmland  
- 🏜️ Desert Terrain  
- 🌊 Sea / Lake / Water Bodies  
- 🏭 Industrial Zones  
- 🌱 Pasture / Grassland  

---

## 📚 Dataset & Model

### 📌 Dataset Used  
- **NWPU-RESISC45**  
A benchmark remote sensing dataset containing 45 scene classes with high-resolution satellite imagery.

### 🧠 Model Architecture  
- **ResNet-50 (Transfer Learning)**  
Fine-tuned for land-use and scene classification.

---

## 📸 Sample Predictions

| Test Region | Predicted Label | Confidence |
|------------|----------------|------------|
| Kolkata City (Dense Urban) | Residential | **0.93** |
| Amazon Rainforest | Forest | **0.99** |
| Village Farmland Fields | PermanentCrop | **0.72** |
| Ganga River Water Body | SeaLake | **0.69** |

---

## 🖼️ Screenshots (Add Yours Here)

📌 Add screenshots inside a folder named `/screenshots`

```md
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2efab23a-16d8-42e5-8b82-a1b6ff1b0930" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f5404038-4a22-4064-9292-085e17d15a51" />


