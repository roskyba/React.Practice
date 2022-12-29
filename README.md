# Getting Started with App

### `npm install`

### `npm run start:backend` - to start the backend (port 3001)

### `npm start` - to start App (port 3000)

Please note. You need to run 2 instances of terminal - one for the App and second for the BE

# As for the Backend - we have 3 API's to work with

`axios.get("http://localhost:3001/total")` - general info about the course
`axios.get("http://localhost:3001/students")` - list of students and their marks
`axios.get("http://localhost:3001/lessons")` - list of lessons (36 overall)

# Extra info

`/assets` - folder with images, fonts, logos etc.

`/components` - folder with all of React components needed. You can create or rename as much as you like

`data.json` - file that acts as a BE. We emulate is as a BE using json-server library. DO NOT MODIFY THE FILE!

`/pages` - folder with pages that can navigated from SideBar

`/utils` - folder with helpfull or resubale functiona JS code (non-React)
