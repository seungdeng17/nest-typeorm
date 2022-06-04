import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 요청, 응답에 대해서는 모름
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    return this.configService.get('SECRET');
  }
}
