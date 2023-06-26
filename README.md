# Linkify

An app that allows users to shorten long URLs à la bit.ly.

# Final Product

![""](#)
![""](#)
![""](#)
![""](#)

## Setup

1. Fork and clone the App from github: https://github.com/KianNaimiRoy/Queue_ball
2. The project is a mono repo with two directories within it that separates the backend and frontend. Cd into the backend directory from the root directory and run `npm install` to install dependencies. Go back to the root directory of the project and cd into the frontend directory, and then also run `npm install` to install dependencies.
3. From the terminal--and with postgreSQL installed-- enter `psql` and create a database for this project (why not call it `queue_ball`?).
4. Create a .env file based on .env.example and fill out the values that correspond to the database you just created.
5. To start the app, open two separate terminal windows for the backend and front end. Run `npm start` for both the backend and frontend to start. Go to [http://localhost:3000](http://localhost:3000) to view the app in your browser.
6. To reset the database, run `npm run db:reset` from the 'backend' directory. Be sure to clear the local storage in your browser so that you don't encounter any funny queueing behaviour.
7. Enjoy the app!

## Dependencies

- Express
- Dotenv
- PostgreSQL
- Nodemon
- Morgan
- Cors
- Socket.io
- Axios
- Classnames
- Body-parser
