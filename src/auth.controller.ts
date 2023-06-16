import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() body: { username: string, password: string }): Promise<any> {
    const { username, password } = body;
    console.log('name: ', username);
    console.log('clave: ', password);
    return this.userService.validateUser(username, password);
  }
}
