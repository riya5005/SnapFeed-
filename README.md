# SnapFeed — MERN Stack Image Sharing App

SnapFeed is a simple image-sharing application built using the MERN stack. Users can upload images with captions and view their posts in a feed. The application uses ImageKit for image storage and MongoDB for storing post details.

## Features

- Upload images with captions
- View posts in a feed
- Store post details in MongoDB
- Upload and host images using ImageKit
- Fetch posts through REST APIs
- Navigate between Create Post and Feed pages

## Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Image Storage:** ImageKit
- **File Upload:** Multer
- **Version Control:** Git and GitHub

## Project Structure

```text
SnapFeed/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── post.model.js
│   │   └── services/
│   │       └── storage.services.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── Feed.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/riya5005/SnapFeed-.git
cd SnapFeed-
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory and add your credentials:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Replace the placeholder values with your actual credentials. Never commit your `.env` file to GitHub.

Start the backend server:

```bash
node server.js
```

The backend runs on:

`http://localhost:5000`

### 3. Set Up the Frontend

Open a new terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-post` | Upload an image and create a post |
| GET | `/posts` | Retrieve all posts |

### Create a Post

Send a `POST` request to:

`http://localhost:5000/create-post`

Use `multipart/form-data` with these fields:

- `image` — File
- `caption` — Text

### Get All Posts

Send a `GET` request to:

`http://localhost:5000/posts`

The API returns the saved posts from MongoDB.

## How to Use

1. Start the backend and frontend servers.
2. Open the application in your browser.
3. Navigate to the Create Post page.
4. Select an image and enter a caption.
5. Submit the post.
6. After successful creation, navigate to the Feed page.
7. View the uploaded post and its caption.

## Errors Faced and Solutions

### 1. MongoDB Atlas Connection Error

**Problem:** DNS resolution errors such as `ENOTFOUND` prevented the backend from connecting to MongoDB Atlas.

**Solution:** Checked the connection string, database credentials, cluster configuration, and DNS resolution. Also tried configuring DNS servers through Node.js to troubleshoot the issue.

### 2. Backend Module Import Error

**Problem:** Node.js displayed `Cannot find module '../src/app'`.

**Solution:** Corrected the import path in `server.js` to match the project structure.

```js
const app = require('./src/app');
```

### 3. Server Reference Error

**Problem:** `ReferenceError: server is not defined`.

**Solution:** Stored the result of `app.listen()` in a variable before attaching the server error handler.

```js
const server = app.listen(5000, '127.0.0.1', () => {
  console.log('Server listening at http://127.0.0.1:5000');
});
```

### 4. Postman Request Kept Loading

**Problem:** The API request in Postman did not return a response.

**Solution:** Checked the request URL, server status, and TCP connectivity using PowerShell.

### 5. Port 3000 Connection Failed

**Problem:** Connections to port 3000 failed during API testing.

**Solution:** Used `netstat` and `Test-NetConnection` in PowerShell to verify whether the server was listening on the expected port.

### 6. `EACCES: permission denied`

**Problem:** Node.js encountered a permission error while attempting to bind to port 3000.

**Troubleshooting:** Tried switching to port 5000 to investigate the issue. The final resolution has not yet been confirmed.

### 7. API Error Handling

**Problem:** Errors during image uploads or database operations were difficult to identify.

**Solution:** Added `try-catch` handling to the `/create-post` route and logged errors in the backend terminal.

### 8. Image Upload Configuration

**Problem:** Incorrect request configuration could prevent the backend from receiving the image and caption.

**Solution:** Configured Postman to use `form-data`, with `image` set to File and `caption` set to Text. Ensured the field names matched those expected by the backend.

### 9. Incorrect Axios Request

**Problem:** The frontend request incorrectly passed the API URL and form data as a single string.

**Solution:** Passed the URL and `FormData` as separate arguments to `axios.post()`.

```js
await axios.post(
  'http://localhost:5000/create-post',
  formData
);
```

### 10. Posts Not Appearing in the Feed

**Problem:** Newly created posts did not appear on the Feed page.

**Solution:** Fetched posts using the `GET /posts` API and updated React state using `setPosts(res.data.posts)`.

### 11. Navigation After Post Creation

**Problem:** Navigation to the Feed page failed due to an incorrect variable name and a missing import.

**Solution:** Imported `useNavigate` from `react-router-dom` and navigated to `/feed` after a successful API response.

### 12. Git Push Error

**Problem:** Git returned `src refspec main does not match any` when pushing to GitHub.

**Solution:** Created the initial commit, renamed the branch to `main`, and pushed the repository to GitHub.

### 13. Protecting Environment Variables

**Problem:** Environment files could expose database credentials and API keys if committed to GitHub.

**Solution:** Added `.env` files and `node_modules` directories to `.gitignore`.

```gitignore
.env
**/.env
node_modules/
**/node_modules/
```

## Key Learnings

- Building REST APIs using Node.js and Express.js
- Connecting MongoDB Atlas to a backend application
- Uploading and hosting images using Multer and ImageKit
- Testing APIs using Postman
- Managing asynchronous API calls and React state
- Implementing client-side navigation with React Router
- Debugging DNS, server, and port connectivity issues
- Using Git and GitHub for version control
- Protecting sensitive credentials using environment variables

## Future Improvements

- User authentication and authorization
- Like and comment functionality
- User profiles
- Edit and delete posts
- Pagination and infinite scrolling
- Improved form validation and error messages
- Responsive UI and deployment

## Author

**Riya**

- GitHub: [riya5005](https://github.com/riya5005)
- LinkedIn: [Riya](https://www.linkedin.com/in/riya-sharma-48bb34253/)
