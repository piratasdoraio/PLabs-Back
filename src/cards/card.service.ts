import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';
import { CardDto } from 'src/dtos/card.dto';
import { CreateCardDto } from 'src/dtos/create-card.dto';
import PrismaService from 'src/repositories/prisma.service';


@Injectable()
export class CardService {

    constructor(private readonly prismaService: PrismaService) {}

    async getCardById(id: number): Promise<Card> {
        if(!id) {
            return null;
        }
        try {

            const card = await this.prismaService.card.findUnique({where: {id}});

            if(!card) {
                return null;
            }

            return this.mapToDto(card);

        } catch(e) {
            return null;
        }
    }

    async createCard(createCardDto: CreateCardDto): Promise<Card> {
        if(!createCardDto) {
            return null;
        }

        try {
            const createdCard = await this.prismaService.card.create({
                data: {
                    name: createCardDto.name,
                    columnId: createCardDto.columnId,
                    createdAt: new Date(Date.now())
                }
            })
            if(!createdCard) {
                return null;
            }

            return this.mapToDto(createdCard);

        }catch(e) {
            return null;
        }
    }

    private mapToDto(card: Card): CardDto {
        var cardDto = new CardDto();
        cardDto.id = card.id;
        cardDto.name = card.name;
        cardDto.columnId = card.columnId;
        cardDto.createdAt = card.createdAt;
        return cardDto;
    }

}