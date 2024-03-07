# React-Express User Data Manager


### Frontend README

# Frontend - ReactJS Integration with Backend APIs

This project demonstrates the integration of a ReactJS frontend with backend APIs for managing user data.

## Features

- Displaying user data fetched from the backend API.
- Adding new entries to the user data through the frontend interface.
- Updating existing user data using the provided form.
- Displaying counts of add and update operations.

## Technologies Used

- ReactJS
- Axios for HTTP requests
- React Router for navigation

## Setup Instructions

1. Clone the repository to your local machine:

```
git clone https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend.git
```

2. Navigate to the frontend directory:

```
cd client
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- Navigate between different pages using the navigation links.
- Use the "AddEntry" page to add new entries to the user data.
- Use the "Home" page to view the existing user data and update entries if needed.

### Backend README

# Backend - ExpressJS API for User Data Management

This project provides an ExpressJS backend API for managing user data.

## Features

- API endpoints for adding new entries and updating existing entries in the user data.
- API endpoint for fetching the count of add and update operations.
- MongoDB database integration for storing user data.

## Technologies Used

- ExpressJS
- MongoDB
- Mongoose for MongoDB integration

## Setup Instructions

1. Clone the repository to your local machine:

```
git clone https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend.git
```

2. Navigate to the backend directory:

```
cd server
```

3. Install dependencies:

```
npm install
```

4. Set up your MongoDB database and update the connection URL in `app.js` if needed.

5. Start the server:

```
npm start
```

6. The server will start running on `http://localhost:3000`.

## API Endpoints

- `POST /api/entries/add`: Add a new entry to the user data.
- `PUT /api/entries/update/:id`: Update an existing entry in the user data.
- `GET /api/entries/count`: Get the count of add and update operations.

## Usage

- Send HTTP requests to the appropriate endpoints to add or update user data.
- Use the provided count endpoint to monitor the number of add and update operations.

## ScreenShot

Feel free to reach out if you have any questions or need further assistance!

