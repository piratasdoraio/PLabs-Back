import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './cards/card.module';
import { ColumnModule } from './column/column.module';
import UserModule from './user/user.module';

@Module({
  imports: [UserModule, CardModule, ColumnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
