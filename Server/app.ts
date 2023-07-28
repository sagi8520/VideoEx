import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import appRouter from './router';
import { applicationErrorHandler, userErrorHandler } from './middlewares/errors/errorHandler';
import morgan from 'morgan';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

// Read the port number from the environment variable
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(mongoURI, {
}).then(() => console.log('connected to db'))
    .catch((err) => console.log(err));

// Create an Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Logger middleware
app.use(morgan('dev'));

app.use(appRouter);
app.use(userErrorHandler);
app.use(applicationErrorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});