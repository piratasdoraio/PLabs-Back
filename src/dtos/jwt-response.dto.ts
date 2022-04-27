import { ApiProperty } from "@nestjs/swagger";

export class JwtResponseDto {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    refresh_token: string;
}