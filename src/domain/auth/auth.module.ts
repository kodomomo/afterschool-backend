import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../../global/guard/jwt.guard';
import { JwtProvider } from '../../global/security/jwt/jwt.provider';
import { LoginUseCase } from './usecase/login.usecase';
import { AuthController } from './presentation/auth.controller';

const GLOBAL_GUARD = { provide: APP_GUARD, useClass: JwtAuthGuard };

@Global()
@Module({
    imports: [JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            secret: config.get<string>('JWT_SECRET')
        })
    })],
    providers: [
        JwtProvider,
        GLOBAL_GUARD,
        LoginUseCase
    ],
    controllers: [
        AuthController
    ]
})
export class AuthModule {
}