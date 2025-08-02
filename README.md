## Rent Saathi - Car Rental Application
A full-stack car rental application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse available cars, view detailed information, and make bookings. The application includes user authentication for a personalized experience.

### Features
- User Authentication: Secure user registration and login.
- Browse Cars: View a list of available cars with key details like model and price.
- Car Details: Click on any car to see more information, including a description and specifications.
- Booking System: A simple booking process for authenticated users.
- User Profile: A dedicated page for logged-in users to view their profile information.
- Responsive Design: The application is designed to be fully responsive and accessible on various devices.

### Technologies Used
#### Frontend
- React: A JavaScript library for building user interfaces.
- React Router: For handling client-side routing.
- Tailwind CSS: A utility-first CSS framework for styling.
- Context API: For global state management (e.g., user authentication, selected car).

#### Backend
- Node.js: A JavaScript runtime environment for the server.
- Express.js: A web application framework for Node.js.
- Nodemon: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- MongoDB: A NoSQL database for storing application data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- JWT (JSON Web Tokens): For secure, stateless authentication.

### Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm
- MongoDB (local installation or a cloud service like MongoDB Atlas)

### Installation and Setup
##### 1 Clone the repository
First, clone the repository to your local machine.

```bash
git clone https://github.com/ritika1630/car_rental.git
cd car_rental
```
2 Backend Setup
- Navigate to the `backend` directory and install the dependencies.

```bash
cd server
npm install
```

- Create a `.env` file in the `backend` directory and add your enviornment variables,

```bash
PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<A strong, random secret key>
```

- Install `nodemon` as a development dependancy

```bash
npm install --save-dev nodemon
```

- Start the backend server with `nodemon`.
```bash
nodemon server.js
```

3 Frontend setup

- Open a new terminal, navigate to the `frontend` directory, and install the dependencies.
```bash
cd ../frontend
npm install
```

- Create a .env file in the `frontend` directory to store your API URL.
```bash
VITE_API_URL=http://localhost:5000/api
```

- Start the frontend development server
```bash
npm run dev
```

The React application will be available at `http://localhost:5173` (or a similar port).
