# 🎵 Tone Picker Tool

A full-stack web application that allows users to input text and select a desired tone (e.g., formal, casual, enthusiastic).  
The app transforms the input to match the selected tone using AI-powered backend services.

---

## 🚀 Live Demo
👉 [Try it here](#) *(Add your deployed URL once live)*

---

## 🧰 Tech Stack
- **Frontend:** React (TypeScript), Custom Hooks, Responsive UI  
- **Backend:** Express.js, REST API, Secure AI Service Integration  
- **Deployment:** Render, Environment Variables, Health Checks  

---

## ✨ Features
- 🎯 Real-time tone transformation of user input  
- 🧠 AI integration via third-party services (e.g., OpenRouter / Mistral)  
- 🔄 Undo/Redo functionality using custom React hooks  
- ✅ Health check endpoints for deployment verification  
- 🔐 Secure handling of API keys and environment variables  

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/sneha-kr20/Tone-Picker-Tool.git
cd Tone-Picker-Tool
2. Backend Setup (Express.js)
bash
Copy code
cd server
npm install
Create a .env file inside the server/ folder and add:

ini
Copy code
MISTRAL_API_KEY=your_api_key_here
Start the backend:

bash
Copy code
npm start
Runs on: http://localhost:5000

3. Frontend Setup (React + TypeScript)
bash
Copy code
cd client
npm install
npm run dev
Runs on: http://localhost:5173

4. Running Both Frontend and Backend Together
If you want to run both servers with a single command, install concurrently in the root directory:

bash
Copy code
npm install -g concurrently
Then, from the project root, run:

bash
Copy code
concurrently "npm start --prefix server" "npm run dev --prefix client"
🔍 Useful Commands Reference
Backend

Install deps: npm install --prefix server

Start: npm start --prefix server

Frontend

Install deps: npm install --prefix client

Start dev server: npm run dev --prefix client

Both together

concurrently "npm start --prefix server" "npm run dev --prefix client"

