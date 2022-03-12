import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import UserDto from 'src/dtos/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<UserDto> {
        try {
            const user = await this.authService.validateUser(username, password);
            if(!user) {
                throw new UnauthorizedException();
            }
            return user;
        }catch(e) {
            throw new InternalServerErrorException();
        }
        
    }
}