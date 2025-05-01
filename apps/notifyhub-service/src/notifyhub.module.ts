import { Module } from '@nestjs/common';
import { NotifyhubController } from './notifyhub.controller';
import { NotifyhubService } from './notifyhub.service';

@Module({
  imports: [],
  controllers: [NotifyhubController],
  providers: [NotifyhubService],
})
export class NotifyhubModule {}
