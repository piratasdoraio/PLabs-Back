import { Controller, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { CardDto } from "src/dtos/card.dto";
import { HttpExceptionDto } from "src/dtos/http-exception.dto";
import { CardService } from "./card.service";


@Controller('cards')
export class CardController {
    constructor(private readonly cardService: CardService) {}

    @Get(':id')
    @ApiResponse({status: HttpStatus.OK, type: CardDto})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async getCardById(@Param('id', ParseIntPipe) id: number): Promise<CardDto> {
        const card =  this.cardService.getCardById(id);
        if(!card) {
            throw new NotFoundException()
        }

        return card;
    }
}