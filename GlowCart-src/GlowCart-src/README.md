# GlowCart – Beauty E-commerce App (React Native CLI)

Minimal cosmetic e-commerce app using DummyJSON API.

## ✨ Features
- Onboarding, Login, Register
- Product list (search) from API
- Product details: image, description, price, highlights, mock reviews
- Profile screen (mock)
- Clean navigation + simple Context store

## 🛠️ Setup
```bash
# 1) Create a fresh RN CLI project
npx react-native init GlowCart

# 2) Move into the project
cd GlowCart

# 3) Copy contents from this zip:
# - Replace App.js with the one in this zip
# - Copy the /src folder into your project root

# 4) Install deps
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npm install axios

# 5) Run on Android
npx react-native run-android
```

## 📸 Notes
- Assets include a placeholder logo (src/assets/logo.png).
- API: https://dummyjson.com/products (filtered for cosmetics-like items).
- You can tweak filters in `src/services/api.js` to mimic cosmetics better.

## 📹 Deliverables
- Public GitHub repo
- Demo video (Loom/Jam/Drive link)
- Update this README with screenshots, time taken, assumptions/issues
