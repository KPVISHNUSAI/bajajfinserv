# Bajaj Finserv Full Stack Developer Task
- RA2111003011135
- KAMSALA PALLAVALI VISHNU SAI
- This is a full stack application built with Node.js, Express.js, MongoDB for the backend, and React.js for the frontend. The application processes input data to filter numbers and find the highest alphabet character, displaying the results based on user selection.

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


## Results
```sh
    POST http://localhost:5000/bfhl
    Content-Type: application/json

    {
        "data": ["A", "C", "z"]
    }

```

<div style="text-align:center;width:100%;">
    <img style="margin-bottom:20px;" src="https://github.com/KPVISHNUSAI/bajajfinserv/blob/main/Result/Screenshot%202024-08-02%20195447.png?raw=true" />
    <img style="margin-bottom:20px;" src="https://github.com/KPVISHNUSAI/bajajfinserv/blob/main/Result/Screenshot%202024-08-02%20195538.png?raw=true" />
    <img style="margin-bottom:20px;" src="https://github.com/KPVISHNUSAI/bajajfinserv/blob/main/Result/Screenshot%202024-08-02%20195650.png?raw=true" />
    <img style="margin-bottom:20px;" src="https://github.com/KPVISHNUSAI/bajajfinserv/blob/main/Result/Screenshot%202024-08-03%20002451.png?raw=true" />
</div>


## Video Demonstration
You can watch the video demonstration [here](https://drive.google.com/file/d/1bSBai6C671-PHZtfiR39-LbkJbIyXs5k/view?usp=sharing).

<iframe src="https://drive.google.com/file/d/1bSBai6C671-PHZtfiR39-LbkJbIyXs5k/preview" width="640" height="480"></iframe>
