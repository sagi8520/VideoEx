import winston from 'winston';
import { format, transports } from 'winston';

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp, context }) => {
      const logMessage = context ? `[${timestamp}] ${level} [${JSON.stringify(context)}]: ${message}` : `[${timestamp}] ${level}: ${message}`;
      return logMessage;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs.log' })
  ]
});

export default logger;
