import { NestFactory } from '@nestjs/core';
import { GovsyncModule } from './govsync.module';

async function bootstrap() {
  const app = await NestFactory.create(GovsyncModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
