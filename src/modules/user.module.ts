import { Module } from '@nestjs/common';
import UserController from 'src/controllers/user.controller';
import UserService from 'src/services/user.service';
import PrismaRepository from 'src/repositories/prisma-repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaRepository],
})
export default class UserModule {}