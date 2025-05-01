import { Controller, Get } from '@nestjs/common';
import { DocmanageService } from './docmanage.service';

@Controller()
export class DocmanageController {
  constructor(private readonly docmanageService: DocmanageService) {}

  @Get()
  getHello(): string {
    return this.docmanageService.getHello();
  }
}
