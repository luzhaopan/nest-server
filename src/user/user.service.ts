/**
 * 业务层,在这里写一些与业务相关的逻辑。比如对数据库的 CRUD 就可以写到这里
 */
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Alice Caeiro' },
    { id: 3, name: 'Who Knows' },
  ];
  getAllUser(): object {
    return Promise.resolve(this.users);
  }
  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return Promise.resolve(user);
  }
  addUser(user: any) {
    this.users.push(user);
    return Promise.resolve(this.users);
  }
}
