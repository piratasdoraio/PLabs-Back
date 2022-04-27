import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { JwtResponseDto } from "src/dtos/jwt-response.dto";
import UserDto from "src/dtos/user.dto";
import UserService from "src/user/user.service";
import BCryptPasswordEncoder from "../bcrypt.service";
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from "src/dtos/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly bcrypt: BCryptPasswordEncoder,
        private readonly jwtService: JwtService
        ) {}

    async validateUser(username: string, password: string): Promise<UserDto | null> {
        try {
            const user = await this.userService.findUserByEmail(username);
            console.log(user)
            if(user && this.bcrypt.match(password ,user.password)) {
                
                return this.mapToDto(user);
                
            }
            return null;
        }catch(e) {
            return null;
        }
    }

    async login(login: LoginDto): Promise<JwtResponseDto> {
        
        const user = await this.userService.findUserByEmail(login.email);

        const payload_access = { email: user.email, sub: user.id, name: user.name, exp: Math.floor(Date.now() / 1000) + (60 * 60)};
        const payload_refresh = { email: user.email, sub: user.id, name: user.name, exp: Math.floor(Date.now() / 1000) + (2 * 60 * 60)};
        
        const access_token = this.jwtService.sign(payload_access);
        const refresh_token = this.jwtService.sign(payload_refresh);

        const jwtResponseDto = new JwtResponseDto();
        jwtResponseDto.access_token = access_token;
        jwtResponseDto.refresh_token = refresh_token;

        return jwtResponseDto;

    }

    private mapToDto(user: User): UserDto {
        var userDto = new UserDto();
        userDto.id = user.id;
        userDto.email = user.email;
        userDto.name = user.name;

        return userDto;
    }
}