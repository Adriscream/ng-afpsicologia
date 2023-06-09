import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '@lib/interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
}
