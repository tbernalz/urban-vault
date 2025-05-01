import { Module } from '@nestjs/common';
import { DocmanageController } from './docmanage.controller';
import { DocmanageService } from './docmanage.service';

@Module({
  imports: [],
  controllers: [DocmanageController],
  providers: [DocmanageService],
})
export class DocmanageModule {}
