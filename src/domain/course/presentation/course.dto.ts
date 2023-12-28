import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseRequest {

    @ApiProperty()
    title: string;

    @ApiProperty()
    firstGrade: boolean;

    @ApiProperty()
    secondGrade: boolean;

    @ApiProperty()
    thirdGrade: boolean;

    @ApiProperty()
    man: boolean;

    @ApiProperty()
    woman: boolean;

    @ApiProperty()
    applyStartDate: Date;

    @ApiProperty()
    applyEndDate: Date;

    @ApiProperty()
    lectureStartDate: Date;

    @ApiProperty()
    lectureEndDate: Date;
}