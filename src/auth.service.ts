import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
