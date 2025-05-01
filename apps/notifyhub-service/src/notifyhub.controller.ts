import { Controller, Get } from '@nestjs/common';
import { NotifyhubService } from './notifyhub.service';

@Controller()
export class NotifyhubController {
  constructor(private readonly notifyhubService: NotifyhubService) {}

  @Get()
  getHello(): string {
    return this.notifyhubService.getHello();
  }
}
