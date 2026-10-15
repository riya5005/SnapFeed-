# SnapFeed — MERN Stack Image Sharing App

SnapFeed is a simple image-sharing application built using the MERN stack. Users can upload images with captions and view their posts in a feed.

## Features

- Upload images with captions
- View posts in a feed
- Store post details in MongoDB
- Upload and host images using ImageKit
- Navigate between Create Post and Feed pages

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Image Storage: ImageKit
- HTTP Client: Axios

## Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Configure the `.env` file in the backend directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   ```

4. Start the backend:

   ```bash
   node server.js
   ```

5. Open a new terminal, navigate to the frontend directory, install dependencies, and start the React app:

   ```bash
   npm install
   npm run dev
   ```

## Usage

1. Open the application in your browser.
2. Navigate to Create Post.
3. Select an image and enter a caption.
4. Submit the post.
5. View your uploaded post on the Feed page.

## Future Improvements

- User authentication
- Like and comment functionality
- User profiles
- Edit and delete posts

## Author

Riya Kumari

GitHub: https://github.com/riya5005
