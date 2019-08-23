import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
    ) { }

    async findAll(): Promise<Tag[]> {
        return await this.tagRepository.find();
    }

    async create(newTag: CreateTagDto) {
        const item =  new Tag();
        item.title = newTag.title;
        item.icon = newTag.icon;
        return await this.tagRepository.save(item);
    }

    async update(idTag: number, updateTag: CreateTagDto) {
        const item = await this.tagRepository.findOne(idTag);
        item.title = updateTag.title;
        item.icon = updateTag.icon;
        return await this.tagRepository.save(item);
    }

    async delete(idTag: number) {
        await this.tagRepository.findOneOrFail(idTag);
        return await this.tagRepository.delete(idTag);
    }
}
