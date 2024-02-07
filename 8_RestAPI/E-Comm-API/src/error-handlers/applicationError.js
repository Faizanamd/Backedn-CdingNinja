

export class ApplicationError extends Error{
    constructor(message, status){
        this.message  = message;
        this.status = status;
    }
}