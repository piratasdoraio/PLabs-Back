import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './cards/card.module';
import { ColumnModule } from './column/column.module';
import { GroupModule } from './group/group.module';
import UserModule from './user/user.module';

@Module({
  imports: [UserModule, CardModule, ColumnModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
