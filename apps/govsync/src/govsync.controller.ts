import { Controller, Get } from '@nestjs/common';
import { GovsyncService } from './govsync.service';

@Controller()
export class GovsyncController {
  constructor(private readonly govsyncService: GovsyncService) {}

  @Get()
  getHello(): string {
    return this.govsyncService.getHello();
  }
}
