import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ColumnDto } from "src/dtos/column.dto";
import { CreateColumnDto } from "src/dtos/create-column.dto";
import { HttpExceptionDto } from "src/dtos/http-exception.dto";
import { ColumnService } from "./column.service";

@ApiTags('columns')
@Controller('columns')
export class ColumnController {

    constructor(private readonly columnService: ColumnService) {}

    @Get(':id')
    @ApiResponse({status: HttpStatus.OK, type: ColumnDto})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async getColumn(@Param('id', ParseIntPipe) id: number): Promise<ColumnDto> {
        const column = await this.columnService.getColumnById(id);
        if(!column) {
            throw new NotFoundException();
        }

        return column;
    }

    @Post()
    @ApiResponse({status: HttpStatus.CREATED, type: ColumnDto})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, type: HttpExceptionDto})
    async createColumn(@Body() createColumnDto: CreateColumnDto): Promise<ColumnDto> {
        const createdColumn = await this.columnService.createColumn(createColumnDto);
        if(!createColumnDto) {
            throw new BadRequestException();
        }
        return createdColumn;
    }

    @Delete(':id')
    @ApiResponse({status: HttpStatus.OK, type: Number})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async deleteColumn(@Param('id', ParseIntPipe) id: number): Promise<number> {
        const deletedColumn = await this.columnService.deleteColumn(id);
        if(!deletedColumn) {
            throw new BadRequestException();
        }
        return deletedColumn;
    }
}