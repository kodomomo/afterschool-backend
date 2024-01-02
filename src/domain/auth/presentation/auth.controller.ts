import { Body, Controller, Post } from '@nestjs/common';
import { LoginUseCase } from '../usecase/login.usecase';
import { LoginRequest, TokenResponse } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly loginUseCase: LoginUseCase
    ) {
    }

    @Post('/login')
    async login(@Body() request: LoginRequest): Promise<TokenResponse> {
        return await this.loginUseCase.execute(request);
    }
}