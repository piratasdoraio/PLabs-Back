const mySecret = process.env['DATABASE_URL']
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import PrismaService from './repositories/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
                .setTitle('BNI API')
                .setDescription('')
                .setVersion('1.0.0')
                .addTag('BNI')
                .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
const mySecret = process.env['DATABASE_URL']
  app.useGlobalPipes(new ValidationPipe());
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app)

  await app.listen(3000);
}
bootstrap();
