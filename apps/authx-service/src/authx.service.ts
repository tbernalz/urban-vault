import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthxService {
  getHello(): string {
    return 'Hello World!';
  }
}
