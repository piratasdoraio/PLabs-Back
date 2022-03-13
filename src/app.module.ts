import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CardModule } from './cards/card.module';
import { ColumnModule } from './column/column.module';
import { GroupModule } from './group/group.module';
import { AuthModule } from './security/auth/auth.module';
import UserModule from './user/user.module';

@Module({
  imports: [UserModule, CardModule, ColumnModule, GroupModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
