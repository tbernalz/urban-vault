import { Controller, Get } from '@nestjs/common';
import { DocgateService } from './docgate.service';

@Controller()
export class DocgateController {
  constructor(private readonly docgateService: DocgateService) {}

  @Get()
  getHello(): string {
    return this.docgateService.getHello();
  }
}
