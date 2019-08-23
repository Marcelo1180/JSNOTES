import { Controller, Get, Body, Post, Put, Res, Param, HttpStatus, Delete } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note-dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) { }

    @Get()
    async findAll(@Res() response) {
        this.notesService.findAll().then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( (e)=>{
            // response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se puede obtener el listado'});
            response.status(HttpStatus.FORBIDDEN).json({mensaje: e});
        });
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto, @Res() response) {
        this.notesService.create(createNoteDto).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se pudo crear la nota'});
        });
    }

    @Put(':id')
    update(@Body() updateNoteDto: CreateNoteDto, @Res() response, @Param('id') idNote) {
        this.notesService.update(idNote, updateNoteDto).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'No se pudo actualizar la nota'});
        });
    }

    @Delete(':id')
    delete (@Res() response, @Param('id') idNote: number) {
        this.notesService.delete(idNote).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( ()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'El recurso no esta disponible para borrar'});
        });
    }

}