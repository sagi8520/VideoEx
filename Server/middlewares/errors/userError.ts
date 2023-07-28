export class UserError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super();

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message || 'User Error';
        this.status = status || 400;
    }
}
export class MongooseValidationError extends UserError {
    constructor(message?: string) {
        super(message || 'Mongoose validation error', 400);
    }
}
export class EmailExistsError extends UserError {
    constructor(message?: string) {
        super(message || 'Email already exists', 400);
    }
}
export class UsernameExistsError extends UserError {
    constructor(message?: string) {
        super(message || 'Username already in use', 400);
    }
}
export class UserNotExistsError extends UserError {
    constructor(message?: string) {
        super(message || 'User id not found', 404);
    }
}
