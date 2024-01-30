import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    // NOTE return data will be used in public/index.html if possible
    return {message: 'NestJS + EJS'}
  }
}
