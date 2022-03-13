import { Module } from '@nestjs/common';
import UserController from 'src/user/user.controller';
import UserService from 'src/user/user.service';
import PrismaService from 'src/repositories/prisma.service';
import BCryptPasswordEncoder from 'src/security/bcrypt.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, BCryptPasswordEncoder],
  exports: [UserService]
})
export default class UserModule {}