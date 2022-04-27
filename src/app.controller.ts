import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtResponseDto } from './dtos/jwt-response.dto';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './security/auth/auth.service';
import { LocalAuthGuard } from './security/guard/local-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  
    @Post('auth/login')
    @ApiResponse({})
    async login(@Body() login: LoginDto): Promise<JwtResponseDto> {
        return await this.authService.login(login);
    }
}
