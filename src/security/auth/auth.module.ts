import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import UserModule from "src/user/user.module";
import BCryptPasswordEncoder from "../bcrypt.service";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [UserModule],
    providers: [AuthService, BCryptPasswordEncoder, LocalStrategy]
})
export class AuthModule {}