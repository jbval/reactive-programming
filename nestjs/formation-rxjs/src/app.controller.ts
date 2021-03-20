import { Controller, Get, Param } from '@nestjs/common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return of('Hello').pipe(map((d) => `${d} From Pipe observable`)); // this.appService.getHello();
  }

  @Get('/name/:lastName')
  getFromName(@Param('lastName') name: string) {
    return { input: name, value: `${name}-call` };
  }
}
