import { Tag } from "../entities/tag.entity";

export class CreateNoteDto {
    readonly title: string;
    readonly content: string;
    readonly tags: Tag[];
}