/**
 * 业务层,在这里写一些与业务相关的逻辑。比如对数据库的 CRUD 就可以写到这里
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  private list = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  getList(): object {
    return Promise.resolve(this.list);
  }
}
