import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import PrismaService from "src/repositories/prisma.service";

@ApiTags('columns')
@Controller('columns')
export class ColumnController {

    constructor(private readonly prismaService: PrismaService) {}
    
}