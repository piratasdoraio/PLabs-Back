import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateGroupDto } from "src/dtos/create-group.dto";
import { GroupDto } from "src/dtos/group.dto";
import { HttpExceptionDto } from "src/dtos/http-exception.dto";
import { GroupService } from "./group.service";

@ApiTags('groups')
@Controller('groups')
export class GroupController {
    constructor(private readonly groupService: GroupService){}

    @Get(':id')
    @ApiResponse({status: HttpStatus.OK, type: GroupDto})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async geGroup(@Param('id', ParseIntPipe) id: number): Promise<GroupDto> {
        
        const group = await this.groupService.findGroupById(id);
        if(!group) {
            throw new NotFoundException();
        }
        return group;  
    } 
    
    @Post()
    @ApiResponse({status: HttpStatus.CREATED, type: GroupDto})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, type: HttpExceptionDto})
    async createGroup(@Body() body: CreateGroupDto): Promise<GroupDto> {
        
        const createdGroup = await this.groupService.createGroup(body);
        if(!createdGroup) {
            throw new BadRequestException();
        }

        return createdGroup;
    }

    @Delete(':id')
    @ApiResponse({status: HttpStatus.OK, type: Number})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async deleteGroup(@Param('id', ParseIntPipe) id: number): Promise<number> {
        const deletedGroup = await this.groupService.deleteGroupById(id);
        if(!deletedGroup) {
            throw new NotFoundException()
        }
        
        return deletedGroup;
    }

    
}