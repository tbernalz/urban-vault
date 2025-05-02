import { Module } from '@nestjs/common';
import { AuthxController } from './authx.controller';
import { AuthxService } from './authx.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthxController],
  providers: [AuthxService],
})
export class AuthxModule {}
