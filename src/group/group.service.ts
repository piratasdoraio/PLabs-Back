import { Injectable } from "@nestjs/common";
import { Group } from "@prisma/client";
import { CreateGroupDto } from "src/dtos/create-group.dto";
import { GroupDto } from "src/dtos/group.dto";
import PrismaService from "src/repositories/prisma.service";

@Injectable()
export class GroupService {
    constructor(private readonly prismaService: PrismaService) {}

    async createGroup(createGroupDto: CreateGroupDto): Promise<GroupDto> {
        try {
            const createdGroup = await this.prismaService.group.create({
                data: {
                    name: createGroupDto.name,
                    createdAt: new Date(Date.now())
                }
            });
            
            if(!createdGroup) {
                return null;
            }

            return this.mapToDto(createdGroup);

        }catch(e) {
            return null;
        }
    }

    async findGroupById(id: number): Promise<GroupDto> {
        if(!id) {return null;}
        try {
            const group = await this.prismaService.group.findUnique({where: {id}});
            if(!group) {return null;}

            return this.mapToDto(group);
        }catch(e) {
            return null;
        }
    }

    async deleteGroupById(id: number): Promise<number> {
        if(!id) {return null;}
        
        try {
            const deletedGroup = await this.prismaService.group.delete({where: {id}});
            if(!deletedGroup) {return null;}
            return deletedGroup.id;
        }catch(e) {

        }
    }

    private mapToDto(group: Group): GroupDto {
        var groupDto = new GroupDto();
        groupDto.id = group.id;
        groupDto.createdAt = group.createdAt;
        groupDto.name = group.name;

        return groupDto;
    }
}