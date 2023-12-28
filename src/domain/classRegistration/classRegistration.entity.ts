import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { LectureEntity } from '../lecture/lecture.entity';
import { UserEntity } from '../user/user.entity';

@Entity('tbl_class_registration')
export class ClassRegistrationEntity {
    @ManyToOne(() => UserEntity, (user) => user, {
        onDelete: 'CASCADE'
    })
    @PrimaryColumn('varchar', { name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => LectureEntity, (lecture) => lecture, {
        onDelete: 'CASCADE'
    })
    @PrimaryColumn('varchar', { name: 'lecture_id' })
    lecture: LectureEntity;

    constructor(user: UserEntity, lecture: LectureEntity) {
        this.user = user;
        this.lecture = lecture;
    }
}