
# MYVC Database Portal

## Prerequisites

- Node.js v18 (to avoid potential version conflicts)
- MySQL Server (local or remote)
- npm or yarn

## Setup Instructions

- Before starting the backend, make sure you change the credentials in the .env file in the backend folder (details can be found in Discord resources channel).
- To run this interface, you need to set up both backend and frontend.

For backend:
   ```sh
   1. cd backend
      npm install
   2. node server.js
   ```
For frontend, open a new terminal:
   ```sh
   1. cd frontend
      npm install
   2. npm start
   ```


## Usage

1. Make sure you are connected to Concordia VPM.
2. Start backend.
3. Start frontend.
4. Open http://localhost:3000 (or other port if 3000 is occupied) in your browser.
5. Use the homepage to navigate to the Query Page.
6. Enter SQL queries into the provided text area.
7. Click "Run Query" to fetch results from the backend.
8. View the formatted results in the right-hand panel.


## Notes
If you got "Cannot find module ..\frontend\node_modules\react-scripts\bin\react-scripts.js" error, try to run these code:

   ```sh
1. Clean out the existing modules:
   Remove-Item -Recurse -Force node_modules
   Remove-Item -Force package-lock.json
   npm cache clean --force

2. Reinstall everything:
   npm install
   
3. Reinstalling react-scripts directly:
   npm install react-scripts@5.0.1 --save

4. Restart the frontend then:
   npm start
   ```
