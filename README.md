# Alumni Relations Student Website

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


## Introduction

This project is a MERN stack application designed specifically for a college's alumni relations and student interaction. It allows alumni or seniors to guide juniors for placements and future careers. Users can post and interact with posts, including commenting and liking. It provides comprehensive CRUD operations for managing user profiles and posts.

## Features

- **User Authentication**: Secure registration and login with proper password hashing and matching.
- **Profile Management**: Users can create, edit, and delete their profiles.
- **Posts**: Users can create, edit, and delete posts. All posts are fetched and displayed on the dashboard.
- **Comments and Likes**: Users can comment on and like posts.
- **Alumni Guidance**: Alumni can guide juniors on placements and career opportunities through posts and interactions.
- **Dashboard**: A central dashboard to view all posts and interactions.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**:bcrypt for password hashing 

## Usage

1. **Register and Login**: Users can register with their email and password. Upon successful registration, users can log in to access the application.
2. **Profile Management**: Users can set up their profile with personal information, which can be edited or deleted later.
3. **Posting**: Users can create new posts, edit or delete their posts.
4. **Interaction**: Users can comment on and like posts to interact with others.
5. **Dashboard**: View all posts and interactions in a centralized dashboard.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/alumni-relations-student-website.git
    cd alumni-relations-student-website
    ```

2. **Install dependencies** for both frontend and backend:

    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the `backend` directory with the following content:

    ```env
    MONGO_URI=your_mongo_database_uri

    ```

4. **Run the application**:

    ```bash
    # For backend
    cd backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

    The backend will be running on `http://localhost:5000` and the frontend on `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### User Profile

- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user profile

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get post by ID
- `PUT /api/posts/:id` - Update post by ID
- `DELETE /api/posts/:id` - Delete post by ID

### Comments

- `POST /api/posts/:id/comments` - Add a comment to a post
- `DELETE /api/posts/:postId/comments/:commentId` - Delete a comment

### Likes

- `POST /api/posts/:id/likes` - Like a post
- `DELETE /api/posts/:id/likes` - Unlike a post

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to update tests as appropriate.


