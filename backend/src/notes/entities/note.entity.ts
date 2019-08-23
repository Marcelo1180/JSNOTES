import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag.entity';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column('text')
    content: string;

    @Column()
    views: number;

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

    @BeforeInsert()
    updateDateCreation() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    updateDateUpdate() {
        this.updatedAt = new Date();
    }
}