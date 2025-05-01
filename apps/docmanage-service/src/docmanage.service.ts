import { Injectable } from '@nestjs/common';

@Injectable()
export class DocmanageService {
  getHello(): string {
    return 'Hello World!';
  }
}
