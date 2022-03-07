import { Injectable } from "@nestjs/common";
import PrismaRepository from "src/repositories/prisma-repository";
import { User } from '@prisma/client';
import CreateUserDto from "src/dtos/create-user.dto";
import UserDto from "src/dtos/user.dto";

@Injectable()
export default class UserService {

    constructor(private readonly prisma: PrismaRepository) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserDto | null> {
        if (!createUserDto) {
            return null;
        }

        try {
            
            const userDto = new UserDto(); 

            const user = await this.prisma.user.create({
                data: {
                    email: createUserDto.email,
                    name: createUserDto.name,
                    password: createUserDto.password,
                    createdAt: new Date(Date.now())
                }
            });
            
            return this.mapToDto(user);

        } catch(e) {
            return null;
        }
    }

    async findAllUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    private mapToDto(user: User): UserDto {
        
        const userDto = new UserDto();
        
        userDto.id = user.id;
        userDto.email = user.email;
        userDto.name = user.name;
        
        return userDto;
    }
    
}