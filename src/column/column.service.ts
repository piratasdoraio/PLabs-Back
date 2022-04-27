import { Injectable } from "@nestjs/common";
import { Column } from "@prisma/client";
import { ColumnDto } from "src/dtos/column.dto";
import { CreateColumnDto } from "src/dtos/create-column.dto";
import PrismaService from "src/repositories/prisma.service";

@Injectable()
export class ColumnService {
    constructor(private readonly prismaService: PrismaService) {}

    async getColumnById(id: number): Promise<ColumnDto> {
        if(!id || typeof id != 'number') {return null;}
        
        try {
            const column = await this.prismaService.column.findUnique({where: {id}});
        
            if(!column) {
                return null
            }
            return this.mapToDto(column);
        }catch(e) {
            return null;
        }
         
    }

    async createColumn(createColumnDto: CreateColumnDto): Promise<ColumnDto> {
        const columnName = createColumnDto.name;
        const groupId = createColumnDto.groupId;

        const nameAlreadyExists = await this.prismaService.column.findUnique({where: {name: columnName}});
        if( nameAlreadyExists ) {return null;}  

        const groupExists = await this.prismaService.group.findUnique({where: {id: groupId}});
        if(!groupExists) {return null;}

        const createdColumn = await this.prismaService.column.create({data: {
            name: columnName,
            createdAt: new Date(Date.now()),
            groupId: groupId
        }})

        return this.mapToDto(createdColumn);
        
    }

    async deleteColumn(id: number): Promise<number> {
        if(!id || typeof id != 'number') {return null;}
        const deletedColumn = await this.prismaService.column.delete({where: {id}});
        if(!deletedColumn) {return null;}
        return deletedColumn.id;
    }


    private mapToDto(column: Column): ColumnDto {
        var columnDto = new ColumnDto();

        columnDto.id = column.id;
        columnDto.name = column.name;
        columnDto.createdAt = column.createdAt;
        columnDto.groupId = column.groupId;
        
        return columnDto;
    }
}