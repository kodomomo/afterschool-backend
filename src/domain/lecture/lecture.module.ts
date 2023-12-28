import { TypeOrmModule } from '@nestjs/typeorm';
import { LectureEntity } from './lecture.entity';
import { Global, Module } from '@nestjs/common';

const LECTURE_REPOSITORY = TypeOrmModule.forFeature([LectureEntity]);

@Global()
@Module({
    imports: [LECTURE_REPOSITORY],
    exports: [LECTURE_REPOSITORY]
})
export class LectureModule {
}