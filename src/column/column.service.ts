import { Injectable } from "@nestjs/common";
import { Column, Group } from "@prisma/client";
import PrismaService from "src/repositories/prisma.service";

@Injectable()
export class ColumnService {
    constructor(private readonly prismaService: PrismaService) {}

    async getColumnById(): Promise<Column> {}
}