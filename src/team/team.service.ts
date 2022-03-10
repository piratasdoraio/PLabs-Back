import { Injectable } from "@nestjs/common";
import PrismaService from "src/repositories/prisma.service";


@Injectable()
export class TeamService {

    constructor(private readonly prismaService: PrismaService) {}

    async getTeamById(id: number): Promise<TeamDto> {
        if(!id || typeof id != 'number') {return null;}

        const team = await this.prismaService.team.findUnique({where: {id}});

        if(!team) {
            return null;
        }


    }
}