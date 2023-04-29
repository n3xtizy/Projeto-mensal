import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Classroom {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    semester: number;

    @Column()
    year: Number;

}
