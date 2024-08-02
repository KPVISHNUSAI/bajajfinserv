# Bajaj Finserv Full Stack Developer Task

This is a full stack application built with Node.js, Express.js, MongoDB for the backend, and React.js for the frontend. The application processes input data to filter numbers and find the highest alphabet character, displaying the results based on user selection.

## Project Structure
```sh
your-project-root/
├── backend/
│ ├── index.js
│ ├── models/
│ ├── controllers/
│ ├── routes/
│ └── ... (other backend files)
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── TextInput.js
│ │ │ ├── Dropdown.js
│ │ │ └── App.js
│ │ ├── App.css
│ │ ├── index.js
│ │ └── ... (other frontend files)
│ └── package.json
├── package.json
└── ... (other root files)

```

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or remote)

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository_url>
   cd your-project-root
   ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```
3. **Install Frontend Dependencies:**
    ```sh
    cd frontend
    npm install
    cd ..
    cd backend
    npm install
    cd ..
    ```

4. **Set up the environment variables:**
    ```sh
        MONGO_URI='<your_mongodb_connection_string>'
        PORT=5000
    ```

5. **Run Application**
    ```sh
       npm start
    ```
    -   it runs both frontend and backend
    - used concurrency to run frontend and backend simultaneously
    


