## Rent Saathi - Car Rental Application
A full-stack car rental application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse available cars, view detailed information, and make bookings. The application includes user authentication for a personalized experience.

### Features

- **User Authentication**: Secure user registration and login system using JWT.
- **Browse Cars**: View a list of available cars with key details like model, image, and price.
- **Car Details**: Click on a car to view detailed specifications and descriptions.
- **Booking System**: Authenticated users can book cars with ease.
- **User Profile**: Logged-in users have access to their profile and booking history.
- **Responsive Design**: Fully responsive UI compatible with all screen sizes.


### Technologies Used

#### Frontend
- **React**: UI library
- **React Router**: For routing
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management
  
#### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Backend framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **Nodemon**: Development server tool
  
### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- MongoDB (locally or via MongoDB Atlas)
  
### Installation and Setup
##### 1 Clone the repository

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

- Create a `.env` file in the `backend` directory and add your environment variables,

```bash
PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<A strong, random secret key>
```

- Install `nodemon` (for development)

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
