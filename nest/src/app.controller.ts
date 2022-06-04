import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 요청, 응답에 대해서 알고있음
  @Get('user') // GET /abc/user
  async getUser(): Promise<string> {
    return await this.appService.getUser();
  }
}
