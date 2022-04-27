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

    async validate(email: string, password: string): Promise<UserDto> {
        try {
            const user = await this.authService.validateUser(email, password);
            console.log(user);
            if(!user) {
                throw new UnauthorizedException();
            }
            return user;
        }catch(e) {
            throw new InternalServerErrorException();
        }
        
    }
}