import { NestFactory } from '@nestjs/core';
import { DocgateModule } from './docgate.module';

async function bootstrap() {
  const app = await NestFactory.create(DocgateModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
