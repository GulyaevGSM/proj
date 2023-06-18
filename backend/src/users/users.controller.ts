import { Body, Controller, Get, Param, Post, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { Routes, Services } from 'src/utils/constants';
import { IUserService } from './interfaces/user';

@Controller(Routes.USERS)
export class UsersController {
  constructor(@Inject(Services.USERS) private readonly userService: IUserService) { }

}
