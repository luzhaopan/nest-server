/**
 * 控制层,这里主要是写路由相关代码以及处理前端传来的一些参数
 */
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser(): object {
    return this.userService.getAllUser();
  }

  @Get('getUser')
  getUser(@Query('id') id) {
    return this.userService.getUser(+id);
  }

  @Post('add')
  addUser(@Body() body) {
    return this.userService.addUser(body);
  }
}
