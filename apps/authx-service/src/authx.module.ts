import { Module } from '@nestjs/common';
import { AuthxController } from './authx.controller';
import { AuthxService } from './authx.service';

@Module({
  imports: [],
  controllers: [AuthxController],
  providers: [AuthxService],
})
export class AuthxModule {}
