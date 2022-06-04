import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly TestService: TestService,
    @Inject('CUSTOM_KEY') private readonly customValue,
  ) {}

  @Get()
  getHello() {
    return this.customValue;
    // return this.appService.getHello();
  }
}
