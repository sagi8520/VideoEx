import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import appRouter from './routes';
import errorHandler from './middlewares';

// Load environment variables from .env file
dotenv.config();

// Read the port number from the environment variable
const port = process.env.PORT || 3000;

// Create an Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(appRouter);
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});