/**
 * 相当于一个应用程序的根模块,我们可以看到它将AppController和AppService都通过@Module进行了一个注入
 */

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [UserModule, HomeModule],
})
export class AppModule {}
