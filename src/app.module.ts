import { Module } from '@nestjs/common';
import { TypeormConfigModule } from './global/config/typeorm.config';
import { AuthModule } from './domain/auth/auth.module';
import { UserModule } from './domain/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeormConfigModule,
        AuthModule,
        UserModule,
        ConfigModule.forRoot({ isGlobal: true }),
    ]
})
export class AppModule {
}
