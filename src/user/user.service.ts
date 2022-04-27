import { Injectable } from "@nestjs/common";
import PrismaService from "src/repositories/prisma.service";
import { User } from '@prisma/client';
import CreateUserDto from "src/dtos/create-user.dto";
import UserDto from "src/dtos/user.dto";
import BCryptPasswordEncoder from "src/security/bcrypt.service";

@Injectable()
export default class UserService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly passwordEncoder: BCryptPasswordEncoder) {}

    async createUser(createUserDto: CreateUserDto): Promise<UserDto | null> {
        if (!createUserDto) {
            return null;
        }

        try {
            const hashedPassword = await this.passwordEncoder.encode(createUserDto.password);
            const user = await this.prisma.user.create({
                data: {
                    email: createUserDto.email,
                    name: createUserDto.name,
                    password: hashedPassword,
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

    async findUserById(id: number): Promise<UserDto | null> {
        if(!id) {
            return null;
        }
        const user = await this.prisma.user.findUnique({where: {id}});
        if(!user) {
            return null;
        }
        return this.mapToDto(user);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await this.prisma.user.findUnique({where: {email: email}});
            if(!user) { return null; }
            return user;
        }catch(e) {
            return null;
        }
    }

    async deleteUserById(id: number): Promise<number | null> {
        if(!id) {
            return null;
        }
        const deletedUser = await this.prisma.user.delete({where: {id}});

        if(!deletedUser) {
            return null;
        }

        return deletedUser.id;
    }


    private mapToDto(user: User): UserDto {
        
        const userDto = new UserDto();
        
        userDto.id = user.id;
        userDto.email = user.email;
        userDto.name = user.name;
        
        return userDto;
    }
    
}