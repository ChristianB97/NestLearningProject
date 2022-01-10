import { Controller } from '@nestjs/common';
import { Get, Post, Body, Param, NotFoundException, BadRequestException} from "@nestjs/common";
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService} from './message.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {}

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        const {content} = body;
        if (typeof body !== 'string') throw new BadRequestException("Body needs to contain a string");
        return this.messagesService.create(content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        if (!message) throw new NotFoundException("Message not found");
        return message;
    }

}
