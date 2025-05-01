import { Module } from '@nestjs/common';
import { DocgateController } from './docgate.controller';
import { DocgateService } from './docgate.service';

@Module({
  imports: [],
  controllers: [DocgateController],
  providers: [DocgateService],
})
export class DocgateModule {}
