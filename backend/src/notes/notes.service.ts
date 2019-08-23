import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository, createQueryBuilder } from 'typeorm';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>,
    ) { }

    async findAll() {
        return await this.noteRepository.find({ relations: ['tags'] });
    }

    async create(newNote: CreateNoteDto) {
        const item = new Note();
        item.title = newNote.title;
        item.content = newNote.content;
        item.views = 0;
        item.tags = newNote.tags;
        return await this.noteRepository.save(item);
    }

    async update(idNote: number, updateNote: CreateNoteDto) {
        const item = await this.noteRepository.findOne(idNote);
        item.title = updateNote.title;
        item.content = updateNote.content;
        item.views = item.views;
        item.tags = updateNote.tags;
        return await this.noteRepository.save(item);
    }

    async delete(idNote: number) {
        await this.noteRepository.findOneOrFail(idNote);
        return await this.noteRepository.delete(idNote);
    }
}
