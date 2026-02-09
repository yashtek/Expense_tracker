# Expense Tracker

>A lightweight Node.js expense tracker REST API built with Express and MongoDB (Mongoose). It provides basic CRUD for expenses and a modular structure for controllers, services, repositories, validators and middleware.

**Tech:** Node.js, Express, MongoDB, Mongoose

**Quick Start**

- Clone the repo
- Install dependencies
- Configure environment variables
- Start the server

```bash
git clone <repo-url>
cd Expense_tracker
npm install
# create a .env file (example below)
npm start
```

**Environment (.env) example**

```
MONGODB_URI=mongodb://localhost:27017/expense_tracker
PORT=3000
JWT_SECRET=your_jwt_secret
```

**Project layout**

- `index.js` - app entry
- `db.js` - database connection
- `config/` - configuration
- `controller/` - request handlers
- `service/` - business logic
- `repositories/` - data access
- `middleware/` - Express middleware
- `validators/` - request validation

**API (common endpoints)**

Base URL: `http://localhost:<PORT>`

- `GET /expenses` — list expenses
- `POST /expenses` — create expense
- `GET /expenses/:id` — get expense
- `PUT /expenses/:id` — update expense
- `DELETE /expenses/:id` — delete expense
- `POST /auth/register` — (if present) register user
- `POST /auth/login` — (if present) login

Note: Exact routes and auth behavior depend on the controllers present in `controller/` and middleware in `middleware/`.


**Development tips**

- If you use nodemon: `npm run dev` (add this script if missing).
- Use Postman or Insomnia to exercise endpoints.



