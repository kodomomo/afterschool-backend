import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';

const COURSE_REPOSITORY = TypeOrmModule.forFeature([CourseEntity]);

@Global()
@Module({
    imports: [COURSE_REPOSITORY],
    exports: [COURSE_REPOSITORY]
})
export class CourseModule {

}