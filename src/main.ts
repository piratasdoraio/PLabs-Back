import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import PrismaRepository from './repositories/prisma-repository';

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
  app.useGlobalPipes(new ValidationPipe());
  const prismaRepository: PrismaRepository = app.get(PrismaRepository);
  prismaRepository.enableShutdownHooks(app)

  await app.listen(3000);
}
bootstrap();
