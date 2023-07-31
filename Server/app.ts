import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import appRouter from './router';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { config } from './utils/config';
import jwt from 'jsonwebtoken';
import { applicationErrorHandler, userErrorHandler } from './middlewares/errors/errorHandler';
import logger from './utils/logger';

// Read the port number from the environment variable

mongoose.connect(config.mongoURI, {
}).then(() => logger.info('connected to db'))
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
app.listen(config.port, () => {
    logger.info(`Server is listening on port ${config.port}`);
});