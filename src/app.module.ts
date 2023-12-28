import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { TypeormConfigModule } from './global/config/typeorm.config';
import { UserModule } from './domain/user/user.module';
import { CourseModule } from './domain/course/course.module';
import { ConfigModule } from '@nestjs/config';
import { LectureModule } from './domain/lecture/lecture.module';
import { ClassRegistrationModule } from './domain/classRegistration/classRegistration.module';

@Module({
    imports: [
        TypeormConfigModule,
        AuthModule,
        UserModule,
        LectureModule,
        CourseModule,
        ClassRegistrationModule,
        ConfigModule.forRoot({ isGlobal: true })
    ]
})
export class AppModule {
}
