# 📚 Library API (Node.js + Express + MongoDB)

A simple REST API built using **Node.js, Express, and MongoDB (Mongoose)** for managing a book library system.

---

## 🚀 Features

- ➕ Add new books
- 📖 Get all books
- ✏️ Update book details
- ❌ Delete books
- 🔗 MongoDB integration using Mongoose
- ⚡ RESTful API architecture

---

## 🛠️ Tech Stack

- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB
- 🧩 Mongoose
- 🔐 dotenv

---

## 📁 Project Structure

server/
├── config/
│ └── database.js
├── controller/
│ └── appcontroller.js
├── model/
│ └── appmodel.js
├── routes/
│ └── approute.js
├── appserver.js
.env
package.json

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/books`       | Get all books 📖 |
| POST   | `/addbooks`    | Add new book ➕   |
| PUT    | `/upbook/:id`  | Update book ✏️   |
| DELETE | `/delbook/:id` | Delete book ❌    |

🧪 Example Request (POST)
➕ Add Book
{
  "bookname": "Clean Code",
  "bookauthor": "Robert C. Martin",
  "expdate": 2026,
  "intialdate": 2024,
  "year": 2008
}

## 📌 Important Notes

⚠️ Make sure MongoDB is running locally
🔐 Never upload .env file to GitHub
📦 Always ignore node_modules
🚀 Use npm run dev for development

## 👨‍💻 Author

Name: Arslan 
Project: Library API 📚

## ⭐ Support

If you like this project, don't forget to ⭐ star the repository on GitHub!