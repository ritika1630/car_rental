Car Rental Application
A full-stack car rental application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse available cars, view detailed information, and make bookings. The application includes user authentication for a personalized experience.

Features
User Authentication: Secure user registration and login.

Browse Cars: View a list of available cars with key details like model and price.

Car Details: Click on any car to see more information, including a description and specifications.

Booking System: A simple booking process for authenticated users.

User Profile: A dedicated page for logged-in users to view their profile information.

Responsive Design: The application is designed to be fully responsive and accessible on various devices.

Technologies Used
Frontend
React: A JavaScript library for building user interfaces.

React Router: For handling client-side routing.

Tailwind CSS: A utility-first CSS framework for styling.

Context API: For global state management (e.g., user authentication, selected car).

Backend
Node.js: A JavaScript runtime environment for the server.

Express.js: A web application framework for Node.js.

Nodemon: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

MongoDB: A NoSQL database for storing application data.

Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

JWT (JSON Web Tokens): For secure, stateless authentication.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (LTS version recommended)

npm or yarn

MongoDB (local installation or a cloud service like MongoDB Atlas)

Installation and Setup
1. Clone the repository
First, clone the repository to your local machine.

git clone https://github.com/ritika1630/car_rental.git
cd car_rental


2. Backend Setup
Navigate to the server directory and install the dependencies.

cd server
npm install


Create a .env file in the server directory and add your environment variables.

PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<A strong, random secret key>


Install nodemon as a development dependency.

npm install --save-dev nodemon

Start the backend server with nodemon:

nodemon server.js

The server will run at http://localhost:5000 and automatically restart on file changes.

3. Frontend Setup
Open a new terminal, navigate to the client directory, and install the dependencies.

cd ../client
npm install


Create a .env file in the client directory to store your API URL.

VITE_API_URL=http://localhost:5000/api


Start the frontend development server:

npm run dev


The React application will be available at http://localhost:5173 (or a similar port).

Project Structure
car_rental/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── CarList.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Register.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   └── ProductDetails.jsx
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── .env
    ├── package.json
    └── server.js

Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
