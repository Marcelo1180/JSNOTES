import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Note } from './note.entity';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 50 })
    icon: string;
}