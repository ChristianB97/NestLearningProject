import { Controller } from '@nestjs/common';
import { Get, Post, Body, Param} from "@nestjs/common";

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    createMessage(@Body() body: any){

    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log(id);
    }

}
