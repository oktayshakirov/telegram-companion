export class NotAuthenticatedError extends Error {
    constructor(message?: string | undefined) {
        super(message);
        Object.setPrototypeOf(this, NotAuthenticatedError.prototype);
    }
}
