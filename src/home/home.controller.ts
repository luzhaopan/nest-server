/**
 * 控制层,这里主要是写路由相关代码以及处理前端传来的一些参数
 */
import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getList(): object {
    return this.homeService.getList();
  }
}
