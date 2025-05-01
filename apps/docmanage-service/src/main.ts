import { NestFactory } from '@nestjs/core';
import { DocmanageModule } from './docmanage.module';

async function bootstrap() {
  const app = await NestFactory.create(DocmanageModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
