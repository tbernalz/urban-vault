import { Injectable } from '@nestjs/common';

@Injectable()
export class DocgateService {
  getHello(): string {
    return 'Hello World!';
  }
}
