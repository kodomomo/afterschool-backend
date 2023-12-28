import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from '../course/course.entity';

@Entity('tbl_lecture')
export class LectureEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false, length: 50 })
    lectureName: string;

    @Column('varchar', { nullable: false, length: 4 })
    teacherName: string;

    @Column('varchar', { nullable: false, length: 80 })
    description: string;

    @Column('integer', { nullable: false })
    numberOfClasses: number;

    @Column('varchar', { nullable: false, length: 10 })
    lectureRoom: string;

    @Column('integer', { nullable: false })
    numberOfStudents: number;

    @ManyToOne(() => CourseEntity, (course) => course, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'course_id' })
    courseEntity: CourseEntity;

    @Column('boolean', { nullable: false })
    firstGrade: boolean;

    @Column('boolean', { nullable: false })
    secondGrade: boolean;

    @Column('boolean', { nullable: false })
    thirdGrade: boolean;

    @Column('boolean', { nullable: false })
    man: boolean;

    @Column('boolean', { nullable: false })
    women: boolean;

    @Column('boolean', { nullable: false })
    monday: boolean;

    @Column('boolean', { nullable: false })
    wednesday: boolean;

    constructor(lectureName: string, teacherName: string, description: string, numberOfClasses: number, lectureRoom: string, numberOfStudents: number, firstGrade: boolean, secondGrade: boolean, thirdGrade: boolean, man: boolean, women: boolean, monday: boolean, wednesday: boolean) {
        this.lectureName = lectureName;
        this.teacherName = teacherName;
        this.description = description;
        this.numberOfClasses = numberOfClasses;
        this.lectureRoom = lectureRoom;
        this.numberOfStudents = numberOfStudents;
        this.firstGrade = firstGrade;
        this.secondGrade = secondGrade;
        this.thirdGrade = thirdGrade;
        this.man = man;
        this.women = women;
        this.monday = monday;
        this.wednesday = wednesday;
    }
}