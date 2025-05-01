import { NestFactory } from '@nestjs/core';
import { NotifyhubModule } from './notifyhub.module';

async function bootstrap() {
  const app = await NestFactory.create(NotifyhubModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
