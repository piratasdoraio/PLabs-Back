import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Req, UseFilters, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import CreateUserDto from 'src/dtos/create-user.dto';
import { HttpExceptionDto } from 'src/dtos/http-exception.dto';
import UserDto from 'src/dtos/user.dto';
import { AuthService } from 'src/security/auth/auth.service';
import UserService from 'src/user/user.service';

@ApiTags('users')
@Controller('users')
export default class UserController {

    constructor(
        private readonly userService: UserService,
        ) {}
    
    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userService.findAllUsers();
    }

    @Get(':id')
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, type: HttpExceptionDto})
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
        
        const user = await this.userService.findUserById(id);
        if(!user) {
            throw new NotFoundException();
        }
        return user;
    }   

    @Delete(':id')
    @ApiResponse({status: HttpStatus.CREATED})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, type: HttpExceptionDto})
    @ApiResponse({status: HttpStatus.NOT_FOUND, type: HttpExceptionDto})
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<number> {
        
        const user = await this.userService.findUserById(id);
        if(!user) {
            throw new NotFoundException();
        }
        const deletedUser = await this.userService.deleteUserById(id);
        return deletedUser
    }

    @Post()
    @ApiResponse({status: HttpStatus.OK, type: UserDto})
    @ApiResponse({status: HttpStatus.BAD_REQUEST, type: HttpExceptionDto})
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        const createdUser = await this.userService.createUser(createUserDto);
        if(!createdUser) {
            throw new BadRequestException();
        }
        return createdUser;
    }

    
}