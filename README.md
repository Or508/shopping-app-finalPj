# 🛍️ shopping-app-finalPj

Full-Stack Shopping App built with **React**, **Node.js**, and **MongoDB**.  
Includes user authentication with JWT, cart management, and product listing.

---

## 🚀 How to Run Locally

### 🧩 Prerequisites

- Node.js installed  
- MongoDB running locally (`mongodb://127.0.0.1:27017`)  
- Git (optional)

---

### 📁 Folder Structure

projectFinalFullStack/
├── backend/
│ ├── server.js
│ └── models/, routes/, utils/, ...
├── frontend/
│ └── client/
│ ├── src/
│ └── public/


---

### 📦 Install Dependencies

#### 📡 Backend

```bash
cd backend
npm install

💻 Frontend (React)
cd ../frontend/client
npm install


▶️ Run the App

cd backend
node server.js


Start Frontend
cd frontend/client
npm start


.env Example (in backend folder)

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/shoppingapp
JWT_SECRET=yourSuperSecretKey


✨ Features
✅ User Registration and Login

✅ JWT Authentication

✅ Product Listing

✅ Add/Remove from Cart

✅ Full React Frontend

