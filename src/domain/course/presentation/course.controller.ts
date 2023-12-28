import { Body, Controller, Post } from '@nestjs/common';
import { CreateCourseUseCase } from '../usecase/create-course.usecase';
import { CreateCourseRequest } from './course.dto';

@Controller('courses')
export class CourseController {
    constructor(
        private readonly createCourseUseCase: CreateCourseUseCase
    ) {
    }

    @Post()
    async createCourse(
        @Body() request: CreateCourseRequest
    ) {
        await this.createCourseUseCase.execute(request);
    }
}