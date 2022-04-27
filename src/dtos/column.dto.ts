import { ApiProperty } from "@nestjs/swagger";

export class ColumnDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    groupId: number;

}