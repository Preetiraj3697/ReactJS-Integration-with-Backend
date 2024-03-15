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

![localhost_5173_(Nest Hub Max) (4)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/b5efd2b3-3c57-41a4-b94f-2812b110102b)
![localhost_5173_(Nest Hub Max) (5)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/37abff45-94aa-4b55-b62b-209e3f85a596)
![localhost_5173_(Nest Hub Max) (6)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/27680fdf-db7d-48ce-8802-4b233c047824)
![localhost_5173_(Nest Hub Max) (7)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/08a8544c-697d-4abe-b110-31701ad13df3)
![localhost_5173_(Nest Hub Max) (8)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/6f92d278-1d35-4725-9b35-09f859c65ca0)


![Screenshot (34)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/aea7d0be-b99c-44e6-9f99-ada8abc28ca2)
![Screenshot (35)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/cdb0bcf5-e525-46c9-b1f8-eb55ce006ea7)
![Screenshot (37)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/7787a7ba-d15f-4266-95cd-94af490f92da)
![Screenshot (38)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/cefdd124-3145-413a-a449-235a6bab456c)
![Screenshot (39)](https://github.com/Preetiraj3697/ReactJS-Integration-with-Backend/assets/107460745/f836ada0-ff50-460d-9e42-9b0d66f17e23)





Feel free to reach out if you have any questions or need further assistance!

