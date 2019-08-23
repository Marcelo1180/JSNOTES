import { Controller, Get, Body, Post, Put, Res, Param, HttpStatus, Delete } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag-dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get()
    async findAll(@Res() response) {
        this.tagsService.findAll().then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se puede obtener el listado'});
        });
    }

    @Post()
    create(@Body() createTagDto: CreateTagDto, @Res() response) {
        this.tagsService.create(createTagDto).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se pudo crear el tag'});
        });
    }

    @Put(':id')
    update(@Body() updateTagDto: CreateTagDto, @Res() response, @Param('id') idTag) {
        this.tagsService.update(idTag, updateTagDto).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se pudo actualizar el tag'});
        });
    }

    @Delete(':id')
    delete (@Res() response, @Param('id') idTag: number) {
        this.tagsService.delete(idTag).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'El recurso no esta disponible para borrar'});
        });
    }

}