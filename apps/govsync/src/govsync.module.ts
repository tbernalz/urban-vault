import { Module } from '@nestjs/common';
import { GovsyncController } from './govsync.controller';
import { GovsyncService } from './govsync.service';

@Module({
  imports: [],
  controllers: [GovsyncController],
  providers: [GovsyncService],
})
export class GovsyncModule {}
