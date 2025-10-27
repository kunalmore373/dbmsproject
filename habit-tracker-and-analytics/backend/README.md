# Habit Tracker and Analytics - Backend Documentation

## Overview
The Habit Tracker and Analytics project is a full-stack application designed to help users track their habits and analyze their progress over time. The backend is built using Node.js with Express and connects to a MySQL database to store user data, habits, and analytics.

## Features
- User registration and authentication
- Add, view, and delete habits
- Track habit completion and analyze performance over time

## Project Structure
```
backend
├── src
│   ├── controllers
│   │   └── habitController.js
│   ├── models
│   │   ├── habit.js
│   │   ├── user.js
│   │   └── analytics.js
│   ├── routes
│   │   └── habitRoutes.js
│   └── index.js
├── package.json
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd habit-tracker-and-analytics/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Database Setup
Ensure you have MySQL installed and running. Create a database and run the SQL schema provided in `database/schema.sql` to set up the necessary tables.

## Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints
- `GET /habits`: Retrieve all habits for the authenticated user.
- `POST /habits`: Add a new habit for the authenticated user.
- `DELETE /habits/:id`: Delete a habit by its ID.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.