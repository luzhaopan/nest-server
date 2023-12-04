/**
 * 相当于一个应用程序的根模块,我们可以看到它将AppController和AppService都通过@Module进行了一个注入
 */

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
