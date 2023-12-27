import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(`tbl_user`)
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false, length: 30 })
    accountId: string;

    @Column('char', { nullable: false, length: 60 })
    password: string;

    @Column('varchar', { nullable: false, length: 20 })
    name: string;

    @Column('integer', { nullable: false })
    grade: number;

    @Column('integer', { nullable: false })
    classNumber: number;

    @Column('integer', { nullable: false })
    number: number;

    @Column('char', { nullable: false, length: 5 })
    authority: Authority;

    constructor(id: number, accountId: string, password: string, name: string, grade: number, classNumber: number, number: number, authority: Authority) {
        this.id = id;
        this.accountId = accountId;
        this.password = password;
        this.name = name;
        this.grade = grade;
        this.classNumber = classNumber;
        this.number = number;
        this.authority = authority;
    }
}

export type Authority = 'USER' | 'ADMIN';