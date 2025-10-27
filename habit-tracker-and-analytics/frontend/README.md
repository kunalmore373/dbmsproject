# Habit Tracker and Analytics

## Overview
The Habit Tracker and Analytics project is a web application designed to help users track their habits and analyze their progress over time. The application consists of a frontend built with React and a backend powered by Node.js and Express, with MySQL as the database.

## Features
- **User Authentication**: Users can create accounts and log in to track their habits.
- **Habit Management**: Users can add, view, and delete habits.
- **Analytics Dashboard**: Users can visualize their habit completion data over time.

## Project Structure
```
habit-tracker-and-analytics
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── database
│   ├── schema.sql
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MySQL

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd habit-tracker-and-analytics
   ```

2. **Set up the backend**
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Create the MySQL database and tables using the `schema.sql` file located in the `database` directory.

3. **Set up the frontend**
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

1. **Start the backend server**
   ```
   cd backend
   npm start
   ```

2. **Start the frontend application**
   ```
   cd ../frontend
   npm start
   ```

### Usage
- Access the application in your web browser at `http://localhost:3000`.
- Users can register, log in, and start tracking their habits.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.