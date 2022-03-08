import { Module } from '@nestjs/common';
import PrismaService from 'src/repositories/prisma.service';
import { CardService } from './card.service';

@Module({
    controllers: [],
    providers: [CardService, PrismaService]
})

export class CardModule {}