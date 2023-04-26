import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    expertise: string;
}
