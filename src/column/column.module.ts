import { Module } from "@nestjs/common";
import PrismaService from "src/repositories/prisma.service";
import { ColumnController } from "./column.controller";
import { ColumnService } from "./column.service";

@Module({
    controllers: [ColumnController],
    providers: [ColumnService, PrismaService]
})
export class ColumnModule {}