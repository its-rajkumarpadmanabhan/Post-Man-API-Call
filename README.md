<img width="1126" height="871" alt="Screenshot 2026-06-24 152534" src="https://github.com/user-attachments/assets/dcdbf8bf-be20-446d-a760-e1343d5b5fe0" />

# 🚀 Full-Stack Live API Logger (Flask + React + Postman)

A lightweight, full-stack starter application designed to demonstrate how **HTTP REST Client actions (via Postman)** map directly to a backend server (**Python Flask**) and update a frontend UI (**React**) dynamically in real-time.

---

## 🛠️ Tech Stack

* 🐍 **Backend:** Python 3 (Flask, Flask-CORS)
* ⚛️ **Frontend:** React (Vite, JavaScript)
* 🧪 **Testing Tool:** Postman (API Client)

---

## 📋 Features & Architecture

* 🔄 **Real-Time Polling:** The React frontend automatically polls the Flask server every `1000ms` to update the log table instantly without page refreshes.
* 🎨 **Visual Mapping:** Every HTTP request (`GET`, `POST`, `PUT`, `DELETE`) is captured by the backend and rendered in the UI with color-coded badges.
* 🧹 **State Management:** Includes a "Clear History" feature that sweeps the in-memory log on both the backend server and frontend display simultaneously.

---

## 💻 How It Works (The CRUD Lifecycle)

| HTTP Method | API Endpoint | Postman Location | Frontend Result 📊 |
| :--- | :--- | :--- | :--- |
| **`POST`** 🟢 | `/api/log` | Raw JSON Body | Inserts a new resource name (Create) |
| **`PUT`** 🟡 | `/api/log` | Raw JSON Body | Updates a targeted name resource (Update) |
| **`GET`** 🔵 | `/api/log` | URL Query Params | Fetches/Reads data fields (Read) |
| **`DELETE`** 🔴 | `/api/log` | URL Query Params | Simulates resource removal (Delete) |

---

## ⚙️ How to Run the Project

Follow these instructions to spin up both the backend server and the frontend client interface on your local machine.

### 1️⃣ Step 1: Start the Flask Backend 🐍
Open a terminal window, navigate to your backend directory, install the dependencies, and run the app:

```bash
# Navigate into the backend folder
cd backend

# Install dependencies directly to your active Python interpreter
python -m pip install flask flask-cors

# Boot up the server
python app.py<img width="1126" height="871" alt="Screenshot 2026-06-24 152534" src="https://github.com/user-attachments/assets/6976fab6-a82e-4027-9a7e-59f10ee25a03" />
