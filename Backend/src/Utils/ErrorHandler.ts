import IError from '../Interfaces/index';

export default class ErrorHandler {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message =  message;
  }

  public problem(): IError {
    return {
      status: this.statusCode,
      message: this.message,
    }
  }
}