# FS7-farmers-marketplace

An online marketplace for farmers' markets.

## Background

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React). Also you need to run .

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called TrendingQs: `create database farmers`
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

  DB_HOST=localhost
  DB_USER=root
  DB_NAME=farmers
  DB_PASS=YOURPASSWORD

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create several tables in your database.

- Make sure you understand how the `users, markets and products` table is constructed. In your MySQL console, you can run `use farmers;` and then `describe users;` to see the structure of the questions table.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.

### Design

- Materialize: `npm install --save materialize-css@next`
- MDBootstrap: `npm install mdbootstrap`
- React Router: `npm install react-router-dom`
