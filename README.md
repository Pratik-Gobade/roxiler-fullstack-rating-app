
 📊 Full-Stack Transactions Dashboard  
A full-stack web application built as part of the Roxiler Systems Coding Assignment.  
This project includes transactions listing, monthly statistics, bar chart data, and pie chart data.

🚀 Features
🔹 Frontend (React + Vite)
- Modern and responsive UI  
- Animated & attractive dashboard  
- Transactions Table  
- Monthly Statistics  
- Bar Chart Data  
- Pie Chart Data  
- Clean routing & components structure  

🔹 Backend (Node.js + Express + Prisma + SQLite)
- REST API endpoints  
- Fetch all transactions  
- Monthly statistics  
- Bar chart grouped data  
- Pie chart grouped data  
- Combined API  
- Database powered by Prisma ORM  

 📁 Project Structure

Root/ │── backend/ │   ├── src/ │   │   ├── controllers/ │   │   ├── routes/ │   │   ├── server.js │   │   └── seed.js │   ├── prisma/ │   │   ├── schema.prisma │   │   └── migrations/ │   ├── transactions.json │   ├── package.json │ │── frontend/ │   ├── src/ │   │   ├── pages/ │   │   ├── components/ │   │   ├── App.jsx │   │   └── main.jsx │   ├── public/ │   ├── package.json │ └── README.md


 🛠️ Tech Stack

Frontend
- React.js  
- Vite  
- CSS / Tailwind (if added)  

Backend
- Node.js  
- Express  
- Prisma ORM  
- SQLite (local database)

⚙️ Installation & Setup

🔸 1. Clone Repository
```bash
git clone https://github.com/Pratik-Gobade/Internet-Advertisement-Classifier.git
cd Root

🔧 Backend Setup

Install dependencies

cd backend
npm install

Run Prisma migrations

npx prisma migrate dev

Seed the database

node src/seed.js

Start server

npm run dev

API will run on:
👉 http://localhost:5000


---

🎨 Frontend Setup

cd frontend
npm install
npm run dev

Frontend will run on:
👉 http://localhost:5173


---

📡 API Endpoints

Endpoint	Description

/api/transactions	Get all transactions
/api/statistics	Monthly statistics
/api/barchart	Bar chart price ranges
/api/piechart	Pie chart category count
/api/combined	All data combined



---

🖼️ Screenshots


---

📌 Assignment Status

✔ Full-stack completed
✔ API fully functional
✔ Frontend connected
✔ Deployed locally
✔ Ready for submission


---

👤 Author

Pratik Gobade
Full-Stack Developer
GitHub: https://github.com/Pratik-Gobade

