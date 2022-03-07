import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import CreateUserDto from 'src/dtos/create-user.dto';
import UserDto from 'src/dtos/user.dto';
import UserService from 'src/services/user.service';

@Controller('users')
export default class UserController {

    constructor(private readonly userService: UserService) {}
    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userService.findAllUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
}