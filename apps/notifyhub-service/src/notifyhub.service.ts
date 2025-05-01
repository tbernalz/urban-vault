import { Injectable } from '@nestjs/common';

@Injectable()
export class NotifyhubService {
  getHello(): string {
    return 'Hello World!';
  }
}
