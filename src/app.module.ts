import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeormConfigModule } from './global/config/typeorm.config';
import { UserModule } from './domain/user/user.module';
import { CourseModule } from './domain/course/course.module';

@Module({
    imports: [
        TypeormConfigModule,
        AuthModule,
        UserModule,
        CourseModule,
        ConfigModule.forRoot({ isGlobal: true })
    ]
})
export class AppModule {
}
