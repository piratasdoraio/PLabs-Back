import { Injectable } from "@nestjs/common";
import PrismaService from "src/repositories/prisma.service";
import { Team } from "@prisma/client";
import { TeamDto } from "src/dtos/team.dto";
import { CreateTeamDto } from "src/dtos/create-team.dto";

@Injectable()
export class TeamService {

    constructor(private readonly prismaService: PrismaService) {}
 
    async getTeamById(id: number): Promise<TeamDto> {
        if(!id || typeof id != 'number') {return null;}

        const team = await this.prismaService.team.findUnique({where: {id}});

        if(!team) {
            return null;
        }
        return this.mapToDto(team);

    }

    async createTeam(createTeamDto: CreateTeamDto): Promise<TeamDto> {
        const nameAlreadyExists = await this.prismaService.team.findUnique({where: {name: createTeamDto.name}});
        if( nameAlreadyExists ) {return null;}

        const columnIdExists = await this.prismaService.column.findUnique({where: {id: createTeamDto.columnId}});
        if(!columnIdExists) {return null;}

        const createdTeam = await this.prismaService.team.create({data: {
            name: createTeamDto.name,
            columnId: createTeamDto.columnId,
            createdAt: new Date(Date.now())
        }})

        if(!createTeamDto) {return null;}

        return this.mapToDto(createdTeam);
    }

    async deleteTeam(id: number): Promise<number> {
        if(!id || typeof id != 'number') {return null;}

        const deletedTeam = await this.prismaService.team.delete({where: {id}});

        if(!deletedTeam) {return null;}

        return deletedTeam.id;
    }

    private mapToDto(team: Team): TeamDto {
        var teamDto = new TeamDto();
        teamDto.id = team.id;
        teamDto.name = team.name;
        teamDto.createdAt = team.createdAt;
        teamDto.columnId = team.columnId;
        return teamDto;
    } 
}