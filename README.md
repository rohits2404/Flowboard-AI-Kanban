# 🚀 Flowboard AI Kanban

> A modern AI-powered Kanban project management platform with real-time collaboration, drag-and-drop task management, and intelligent task generation.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)
![Socket.io](https://img.shields.io/badge/Socket.IO-Realtime-black?logo=socket.io)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
![AI Powered](https://img.shields.io/badge/AI-Groq%20%2F%20OpenAI-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 Overview

Flowboard AI Kanban is a full-stack project management application inspired by Trello and Jira, enhanced with AI capabilities.

Create boards, organize work into columns, manage tasks with drag-and-drop, collaborate in real time, and let AI help generate tasks and organize workflows.

The application is built using **React**, **Node.js**, **PostgreSQL**, **Socket.IO**, and **OpenAI-compatible AI models**.

---

# ✨ Features

## 📋 Board Management

- Create multiple Kanban boards
- Update board details
- Delete boards
- Private board ownership
- User-specific workspaces

---

## 📂 Column Management

- Create unlimited columns
- Rename columns
- Delete columns
- Drag columns
- Reorder workflow

Example:

```
Todo

↓

In Progress

↓

Review

↓

Done
```

---

## ✅ Task Management

- Create tasks
- Edit task details
- Delete tasks
- Drag & Drop between columns
- Reorder tasks
- Due dates
- Task descriptions
- Priority management

---

## 🤖 AI Features

Generate project tasks automatically using AI.

Example Prompt:

> Create a Kanban board for an E-Commerce Website project.

↓

AI generates:

- Project Setup
- Database Design
- Authentication
- Product APIs
- Frontend Development
- Payment Integration
- Testing
- Deployment

Each task is automatically categorized into appropriate workflow stages.

---

## ⚡ Real-Time Collaboration

Powered by **Socket.IO**

Features include:

- Live board updates
- Instant task movement
- Real-time synchronization
- Collaborative editing
- Automatic refresh across connected clients

---

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes

---

## 🎨 Modern User Interface

- Responsive Design
- Tailwind CSS
- Framer Motion animations
- Beautiful drag-and-drop interactions
- Toast notifications
- Clean dashboard
- Minimal modern design

---

# 🏗 Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS v4
- React Router
- Axios
- DnD Kit
- Framer Motion
- Socket.IO Client
- Date-fns
- Lucide React
- React Hot Toast

---

## Backend

- Node.js
- Express.js
- PostgreSQL
- Socket.IO
- JWT
- bcryptjs
- OpenAI SDK
- Groq API
- dotenv

---

# 📂 Project Structure

```
Flowboard-AI-Kanban
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── layouts
│   │   ├── hooks
│   │   ├── context
│   │   ├── services
│   │   └── utils
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── services
│   │   ├── realtime
│   │   ├── socket
│   │   ├── db
│   │   └── utils
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/rohits2404/Flowboard-AI-Kanban.git

cd Flowboard-AI-Kanban
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

## Install Backend

```bash
cd backend

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

DATABASE_URL=postgres://username:password@localhost:5432/flowboard

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key

GROQ_MODEL=openai/gpt-oss-20b
```

---

# ▶ Running the Application

## Backend

```bash
cd backend

npm run dev
```

---

## Frontend

```bash
cd frontend

npm run dev
```

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# ⚡ Real-Time Architecture

```
Client A

     │

Socket.IO

     │

──────────────

Server

──────────────

     │

Socket.IO

     │

Client B
```

Whenever a task or board changes, every connected user sees the update instantly.

---

# 🤖 AI Workflow

```
User Prompt

      │

      ▼

AI API

      │

Structured JSON

      │

Board Generator

      │

Columns

      │

Tasks

      │

Interactive Kanban Board
```

---

# 📡 API Endpoints

## Authentication

```
POST /auth/register

POST /auth/login
```

---

## Users

```
GET /users/profile
```

---

## Boards

```
GET    /boards

POST   /boards

PUT    /boards/:id

DELETE /boards/:id
```

---

## Columns

```
POST /boards/:boardId/columns

PUT /columns/:id

DELETE /columns/:id
```

---

## Tasks

```
POST /columns/:columnId/tasks

PUT /tasks/:id

DELETE /tasks/:id

PATCH /tasks/reorder
```

---

## AI

```
POST /ai/generate-board
```

---

# 🔄 Application Flow

```
Login

   │

   ▼

Dashboard

   │

   ▼

Create Board

   │

   ▼

Create Columns

   │

   ▼

Create Tasks

   │

   ▼

Drag & Drop

   │

   ▼

Realtime Sync

   │

   ▼

Database
```

---

# 🎯 Highlights

- AI-generated Kanban boards
- Real-time collaboration
- Drag-and-drop interface
- JWT Authentication
- PostgreSQL backend
- Socket.IO integration
- Modern React architecture
- Responsive UI
- RESTful APIs
- Modular codebase

---

# 📈 Future Improvements

- Team workspaces
- Role-based permissions
- Task comments
- File attachments
- Activity timeline
- Email notifications
- Calendar view
- Sprint planning
- Burndown charts
- GitHub integration
- Slack integration
- Dark mode
- Mobile application

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Rohit Sharma**

GitHub:

https://github.com/rohits2404

---

# ⭐ Show Your Support

If you found this project useful,

- ⭐ Star the repository
- 🍴 Fork it
- 🛠️ Contribute
- 💬 Share feedback

---

> Built with ❤️ using React, Node.js, PostgreSQL, Socket.IO, and AI.
