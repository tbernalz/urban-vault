import { NestFactory } from '@nestjs/core';
import { AuthxModule } from './authx.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthxModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
