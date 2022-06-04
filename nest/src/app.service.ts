import { Injectable } from '@nestjs/common';

// 요청, 응답에 대해서는 모름
@Injectable()
export class AppService {
  getHello() {
    return 'hello world';
  }
}
