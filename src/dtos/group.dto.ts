import { ApiProperty } from "@nestjs/swagger";

export class GroupDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    name: string;
}