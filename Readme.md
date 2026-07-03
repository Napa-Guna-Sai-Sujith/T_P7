# 🏥 Hospital Management API (Node.js + Express + MySQL)

A simple Hospital Management System REST API built using Node.js, Express.js, and MySQL.  
It provides full CRUD operations for Doctors, Patients, and Staff.

---

## 🚀 Features

- REST API using Express.js
- MySQL database integration
- Full CRUD operations (Create, Read, Update, Delete)
- Modular route structure
- Clean backend architecture
- Postman testing support
- Beginner-friendly DBMS project

---

## 🧑‍💻 Tech Stack

- Node.js
- Express.js
- MySQL
- Postman

---

## 📁 Project Structure

hospital-api/
│
├── config/
│   └── db.js
│
├── routes/
│   ├── doctor.js
│   ├── patient.js
│   └── staff.js
│
├── server.js
├── package.json
└── hospital2.sql

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/your-username/hospital-api.git
cd hospital-api

---

### 2️⃣ Install dependencies
npm install

---

### 3️⃣ Setup MySQL Database

CREATE DATABASE hospital2;
USE hospital2;

CREATE TABLE doctor (
    did INT AUTO_INCREMENT PRIMARY KEY,
    dname VARCHAR(100),
    age INT,
    gender VARCHAR(20)
);

CREATE TABLE patient (
    pid INT AUTO_INCREMENT PRIMARY KEY,
    pname VARCHAR(100),
    age INT,
    gender VARCHAR(20)
);

CREATE TABLE staff (
    eid INT AUTO_INCREMENT PRIMARY KEY,
    ename VARCHAR(100),
    age INT,
    gender VARCHAR(20)
);

---

### Insert Sample Data

INSERT INTO doctor(dname,age,gender) VALUES
('Dr. Patel',45,'Male'),
('Dr. Shah',38,'Female');

INSERT INTO patient(pname,age,gender) VALUES
('Rahul',22,'Male'),
('Priya',19,'Female');

INSERT INTO staff(ename,age,gender) VALUES
('Amit',28,'Male'),
('Neha',26,'Female');

---

### 4️⃣ Configure Database

Update config/db.js

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hospital2"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
    } else {
        console.log("MySQL Connected Successfully");
    }
});

module.exports = db;

---

### 5️⃣ Run the Server

npm run dev
OR
node server.js

---

## 🌐 Server URL

http://localhost:3000

---

## 📌 API Endpoints

### Doctor APIs
GET     /doctor
GET     /doctor/:id
POST    /doctor
PUT     /doctor/:id
DELETE  /doctor/:id

---

### Patient APIs
GET     /patient
GET     /patient/:id
POST    /patient
PUT     /patient/:id
DELETE  /patient/:id

---

### Staff APIs
GET     /staff
GET     /staff/:id
POST    /staff
PUT     /staff/:id
DELETE  /staff/:id

---

## 🧪 Sample Request

POST /doctor

{
  "dname": "Dr. John",
  "age": 40,
  "gender": "Male"
}

---

## 📷 Sample Response

[
  {
    "did": 1,
    "dname": "Dr. Patel",
    "age": 45,
    "gender": "Male"
  }
]

---

## 🎯 Learning Outcomes

- REST API development
- CRUD operations with MySQL
- Express routing
- Backend project structure
- Postman testing

---

## 🔥 Future Improvements

- JWT Authentication
- React Admin Dashboard
- Appointment system
- Doctor-Patient mapping
- Search & filtering
- Pagination

---

## 👨‍💻 Author

Guna Sai

---

⭐ If you like this project, give it a star on GitHub!