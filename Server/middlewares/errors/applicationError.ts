export class ApplicationError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super();

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message || 'Error: Undefined Application Error';
        this.status = status || 500;
    }
}

export class ServerError extends ApplicationError {
    constructor(message?: string, status?: number) {
        super(message || 'Internal Server Error', status || 500);
    }
}
export class InvalidBodyRequestError extends ApplicationError {
    constructor(message?: string, status?: number) {
        super(message || 'Request body is invalid', status || 500);
    }
}
