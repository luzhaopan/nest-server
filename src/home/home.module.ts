/**
 * 相当于一个应用程序的根模块,我们可以看到它将AppController和AppService都通过@Module进行了一个注入
 */

import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
