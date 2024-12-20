# MovieBooking

A PHP-based Movie Booking application for managing and booking movie tickets. This project is designed to provide a user-friendly platform for customers to browse movies, check availability, and book tickets seamlessly.

## Features

- Browse movies by categories and timings.
- View seat availability for shows.
- User authentication for booking (Login/Register).
- Admin panel for managing movies, schedules, and bookings.
- Real-time booking updates.

## Technologies Used

- **PHP**: Backend scripting.
- **MySQL**: Database management.
- **HTML/CSS**: Frontend structure and styling.
- **JavaScript**: For interactivity and validations.
- **XAMPP**: Local development environment.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nabi0l/my-first-project.git
   
2. **Move the project folder: Place the MovieBooking folder in your XAMPP htdocs directory**:
      C:\xampp\htdocs\Assignment\MovieBooking
   
3. **Start XAMPP:**
   Open the XAMPP Control Panel.
   Start the **Apache** and **MySQL** modules.
   
4. **Set up the database**:

Open phpMyAdmin.
Create a new database (e.g., movie_booking).
Import the database structure:
Navigate to the Import tab.
Select the movie_booking.sql file from the project directory and click Go.

5. **Configure database connection**:

Open the config.php file in the MovieBooking folder.
Update the database credentials:
php
Copy code
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movie_booking";

6. **Access the application**:

Open a browser and go to:
Copy code
http://localhost/Assignment/MovieBooking

**Usage**
1. **Customer**:
Browse available movies.
Book tickets after logging in.

2. **Admin**:
Log in to the admin panel.
Manage movies, schedules, and bookings.

7. **Contributing**
Contributions are welcome! Please fork the repository and create a pull request with your changes.



