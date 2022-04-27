import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export default class CreateUserDto {
    
    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty()
    @IsNotEmpty()
    password: string;
}