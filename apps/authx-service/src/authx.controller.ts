import { Controller, Get } from '@nestjs/common';
import { AuthxService } from './authx.service';

@Controller()
export class AuthxController {
  constructor(private readonly authxService: AuthxService) {}

  @Get()
  getHello(): string {
    return this.authxService.getHello();
  }
}
