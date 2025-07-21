
#ZeeCare - A MERN Stack Hospital Management System

**ZeeCare** is a full-featured hospital management system built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It enables patients, doctors, and administrators to manage appointments, roles, and medical data with ease. It supports role-based dashboards, appointment scheduling, and secure access.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

---

## Features

- Role-based login (Admin, Doctor, Patient)
- Doctor registration and approval system
- Appointment booking and status tracking
- Admin dashboard for user and appointment management
- Doctor availability and schedule updates
- Patient medical profile viewing (optional)
- Password hashing for secure authentication using bcryptjs
- JWT-based authentication and protected routes

---

## Technologies Used

- **Frontend**: React.js (with Tailwind CSS or Chakra UI)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT and bcryptjs
- **State Management**: Redux Toolkit
- **File Uploads** (optional): Cloudinary / Multer

---

## Installation

To set up the project locally, follow the instructions below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hospital-management-system.git
2. **Navigate to the project folder**:
   ```bash
   cd hosptial-management
3. **Install backend dependencies**:
   ```bash
   npm install
4. **Navigate to the frontend directory and install frontend dependencies**:
   ```bash
   cd frontend
   npm install
5. **Set up environment variables**:
   ```bash
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret

6. **Run the application**:
   ```bash
   npm start
   npm run dev 
7. **Start the frontend React app**:
   ```bash
   npm start

## Usage
Admin can approve doctors, manage users, and oversee appointments.

Doctor can manage appointments, update availability, and view patient data.

Patient can book appointments, view status, and update their profile.

All routes are protected with JWT authentication.
## Screenshots
Here’s a preview of **ZeeCare** in action:
1. Sign-Up Page
Users can create accounts based on their roles (patient or doctor).
2. Login Page
Users log in with their credentials securely.
Admin login
User-login
3. Patient Dashboard
Patients can view appointments, book new ones, and manage their profile.
4. Doctor Dashboard
Doctors can view upcoming appointments and set their availability.
5. Admin Dashboard
Admins can approve doctor registrations and monitor system status.
6. Appointment Booking
Patients can search for doctors and book appointments.
