import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_course')
export class CourseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false, length: 30 })
    title: string;

    @Column('boolean', { nullable: false })
    firstGrade: boolean;

    @Column('boolean', { nullable: false })
    secondGrade: boolean;

    @Column('boolean', { nullable: false })
    thirdGrade: boolean;

    @Column('boolean', { nullable: false })
    man: boolean;

    @Column('boolean', { nullable: false })
    woman: boolean;

    @Column('datetime', { nullable: false })
    applyStartDate: Date;

    @Column('datetime', { nullable: false })
    applyEndDate: Date;

    @Column('date', { nullable: false })
    lectureStartDate: Date;

    @Column('date', { nullable: false })
    lectureEndDate: Date;

    constructor(title: string, firstGrade: boolean, secondGrade: boolean, thirdGrade: boolean, man: boolean, woman: boolean, applyStartDate: Date, applyEndDate: Date, lectureStartDate: Date, lectureEndDate: Date) {
        this.title = title;
        this.firstGrade = firstGrade;
        this.secondGrade = secondGrade;
        this.thirdGrade = thirdGrade;
        this.man = man;
        this.woman = woman;
        this.applyStartDate = applyStartDate;
        this.applyEndDate = applyEndDate;
        this.lectureStartDate = lectureStartDate;
        this.lectureEndDate = lectureEndDate;
    }
}