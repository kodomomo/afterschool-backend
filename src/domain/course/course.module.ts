import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { CreateCourseUseCase } from './usecase/create-course.usecase';
import { CourseController } from './presentation/course.controller';

const COURSE_REPOSITORY = TypeOrmModule.forFeature([CourseEntity]);

@Global()
@Module({
    imports: [COURSE_REPOSITORY],
    exports: [COURSE_REPOSITORY],
    providers: [CreateCourseUseCase],
    controllers: [CourseController]
})
export class CourseModule {

}