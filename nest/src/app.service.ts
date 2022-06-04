import { Injectable } from '@nestjs/common';

// 요청, 응답에 대해서는 모름
@Injectable()
export class AppService {
  async getUser() {
    // 트랜잭션 단위의 비지니스 로직
    // const user = await User.findOne();
    // return user;
    return 'hello user';
  }
}
