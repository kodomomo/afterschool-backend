import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

class GlobalExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status: number;
        let message: string;
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message;
        } else {
            status = 500;
            message = 'Internal Server Error';
        }

        const responseBody = {
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString()
        };

        response.status(status).json(responseBody);
    }
}