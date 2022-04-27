import { ApiProperty } from "@nestjs/swagger";


export class CardDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    columnId: number;
    @ApiProperty()
    createdAt: Date;

}