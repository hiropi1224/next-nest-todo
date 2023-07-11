import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// ()内でルートを指定することができる
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ()内でルートを指定することができる
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
