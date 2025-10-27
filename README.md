# Habit Tracker and Analytics

## Overview
The Habit Tracker and Analytics project is a web application designed to help users track their habits and analyze their progress over time. The application consists of a frontend built with React and a backend powered by Node.js and Express, with a MySQL database for data storage.

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
│   │   │   └── habitController.js
│   │   ├── models
│   │   │   ├── habit.js
│   │   │   ├── user.js
│   │   │   └── analytics.js
│   │   ├── routes
│   │   │   └── habitRoutes.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── HabitList.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── AddHabitForm.jsx
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
   ```bash
   git clone <repository-url>
   cd habit-tracker-and-analytics
   ```

2. **Set up the backend**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create the MySQL database and tables using the `schema.sql` file located in the `database` directory.

3. **Set up the frontend**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.