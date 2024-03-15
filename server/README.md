**Backend README**

---

# React-Express User Data Manager

## Backend - ExpressJS API for User Data Management

This project provides an ExpressJS backend API for managing user data.

### Deploy Link:
```bash
https://react-js-integration-with-backend-yaf6.vercel.app/api/entries
```

### Features

- API endpoints for adding new entries and updating existing entries in the user data.
- API endpoint for fetching the count of add and update operations.
- MongoDB database integration for storing user data.

### Technologies Used

- ExpressJS
- MongoDB
- Mongoose for MongoDB integration
- cors
- nodemon

### Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend.git
```

2. Navigate to the backend directory:

```bash
cd server
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MongoDB database and update the connection URL in app.js if needed.

5. Start the server:

```bash
npm start
```

6. The server will start running on [http://localhost:3000](http://localhost:3000).

### API Endpoints

- POST  /api/entries/add: Add a new entry to the user data.
- POST /api/entries/update/:id: Update an existing entry in the user data.
- GET  /api/entries: Get the user data.
- GET /api/entries/count: Get the count of add and update operations.
- Delete /api/entries/:id: Delete the user data from existing user Data.

### Usage

- Send HTTP requests to the appropriate endpoints to add or update user data.
- Use the provided count endpoint to monitor the number of add and update operations.

---

Feel free to reach out if you have any questions or need further assistance!