import { Injectable } from '@nestjs/common';

@Injectable()
export class GovsyncService {
  getHello(): string {
    return 'Hello World!';
  }
}
