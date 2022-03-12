import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import UserDto from "src/dtos/user.dto";
import UserService from "src/user/user.service";
import BCryptPasswordEncoder from "../bcrypt.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly bcrypt: BCryptPasswordEncoder
        ) {}

    async validateUser(username: string, password: string): Promise<UserDto | null> {
        try {
            const user = await this.userService.findUserByEmail(username);
            if(user && this.bcrypt.match(password ,user.password)) {
                
                return this.mapToDto(user);
                
            }
            return null;
        }catch(e) {
            return null;
        }
    }

    private mapToDto(user: User): UserDto {
        var userDto = new UserDto();
        userDto.id = user.id;
        userDto.email = user.email;
        userDto.name = user.name;

        return userDto;
    }
}