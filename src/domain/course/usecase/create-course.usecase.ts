import { Injectable } from '@nestjs/common';
import { CourseEntity } from '../course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseRequest } from '../presentation/course.dto';

@Injectable()
export class CreateCourseUseCase {
    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>
    ) {
    }

    async execute(request: CreateCourseRequest) {
        await this.courseRepository.save(
            new CourseEntity(
                request.title,
                request.firstGrade,
                request.secondGrade,
                request.thirdGrade,
                request.man,
                request.woman,
                request.applyStartDate,
                request.applyEndDate,
                request.lectureStartDate,
                request.lectureEndDate
            )
        );
    }
}