import {
  Body,
  Get,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUserService } from 'src/users/interfaces/user';
import { Routes, Services } from 'src/utils/constants';
import { CheckUserDto } from './dtos/CheckUser.dto';
import { IAuthService } from 'src/auth/interfaces/auth';
import { LocalAuthGuard } from './utils/Guards';
import { AuthenticatedRequest, UserRequest } from 'src/utils/types';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.USERS) private userService: IUserService,
    @Inject(Services.AUTH) private authService: IAuthService
  ) { }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: UserRequest) {
    return req.user
  }

  // @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    req.logout((err) => {
      return err ? res.send(400) : res.send(200);
    });
  }
}
