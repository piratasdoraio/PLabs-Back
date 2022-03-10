import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ColumnDto } from "src/dtos/column.dto";
import { CreateColumnDto } from "src/dtos/create-column.dto";
import { ColumnService } from "./column.service";

@ApiTags('columns')
@Controller('columns')
export class ColumnController {

    constructor(private readonly columnService: ColumnService) {}

    @Get(':id')
    async getColumn(@Param('id', ParseIntPipe) id: number): Promise<ColumnDto> {
        const column = await this.columnService.getColumnById(id);
        if(!column) {
            throw new NotFoundException();
        }

        return column;
    }

    @Post()
    async createColumn(@Body() createColumnDto: CreateColumnDto): Promise<ColumnDto> {
        const createdColumn = await this.columnService.createColumn(createColumnDto);
        if(!createColumnDto) {
            throw new BadRequestException();
        }
        return createdColumn;
    }

    @Delete(':id')
    async deleteColumn(@Param('id', ParseIntPipe) id: number): Promise<number> {
        const deletedColumn = await this.columnService.deleteColumn(id);
        if(!deletedColumn) {
            throw new BadRequestException();
        }
        return deletedColumn;
    }
}