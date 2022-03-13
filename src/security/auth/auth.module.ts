import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import UserModule from "src/user/user.module";
import BCryptPasswordEncoder from "../bcrypt.service";
import { LocalStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtService, JwtModule } from '@nestjs/jwt';


@Module({
    imports: [UserModule,
         PassportModule,
         JwtModule.register({
             secret: 'secret key'
         })],
    providers: [AuthService, BCryptPasswordEncoder, LocalStrategy],
    exports: [AuthService]
})
export class AuthModule {}