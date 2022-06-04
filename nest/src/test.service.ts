import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHello() {
    return '테스트';
  }
}
