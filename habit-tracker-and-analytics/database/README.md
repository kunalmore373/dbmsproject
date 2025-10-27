# Habit Tracker and Analytics Database Documentation

This document provides an overview of the database setup and schema for the Habit Tracker and Analytics project.

## Database Overview

The Habit Tracker and Analytics project utilizes a MySQL database to store user information, habits, and analytics data. The database is structured into three main tables:

1. **Users Table**
   - Stores user information.
   - Fields:
     - `id`: Primary key, auto-incremented integer.
     - `username`: Unique string for user identification.
     - `password`: Hashed string for user authentication.

2. **Habits Table**
   - Stores information about the habits created by users.
   - Fields:
     - `id`: Primary key, auto-incremented integer.
     - `userId`: Foreign key referencing the Users table.
     - `title`: String representing the name of the habit.
     - `frequency`: String indicating how often the habit should be completed (e.g., daily, weekly).

3. **Analytics Table**
   - Stores completion data for each habit.
   - Fields:
     - `id`: Primary key, auto-incremented integer.
     - `userId`: Foreign key referencing the Users table.
     - `habitId`: Foreign key referencing the Habits table.
     - `completionDate`: Date indicating when the habit was completed.

## Setup Instructions

To set up the database for the Habit Tracker and Analytics project, follow these steps:

1. **Create the Database**
   - Use the following SQL command to create a new database:
     ```sql
     CREATE DATABASE habit_tracker;
     ```

2. **Run the Schema Script**
   - Execute the `schema.sql` file located in the `database` directory to create the necessary tables:
     ```sql
     SOURCE path/to/habit-tracker-and-analytics/database/schema.sql;
     ```

3. **Configure Database Connection**
   - Ensure that the backend application is configured to connect to the MySQL database with the appropriate credentials.

## Conclusion

This document serves as a guide for setting up and understanding the database structure for the Habit Tracker and Analytics project. For further details on the backend and frontend implementations, please refer to their respective README files.