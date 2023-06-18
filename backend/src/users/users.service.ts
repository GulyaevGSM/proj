import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/user';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { User } from 'src/utils/mongo/models/User';
import { CreateUserDetails } from 'src/utils/types';
import { hashPassword } from 'src/utils/helpers';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import * as randomstring from "randomstring";

@Injectable()
export class UsersService implements IUserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService
    ) { }

    async createUser(userDetails: CreateUserDetails): Promise<User> {
        const existingUser = await this.userModel.findOne({ email: userDetails.email })

        if (existingUser && existingUser.isVerify)
            throw new HttpException('User already exists', HttpStatus.CONFLICT);

        if (existingUser && !existingUser.isVerify) {
            throw new BadRequestException({
                message: 'Введите код подтверждения, который был выслан на вашу почту при регистрации',
                needToVerify: true
            })
        }

        const password = await hashPassword(userDetails.password)
        const verifyCode = await randomstring.generate(5)
        const newUser = await this.userModel.create({
            email: userDetails.email,
            username: userDetails.username,
            password,
            verifyCode
        })

        // await this.mailerService.sendMail({
        //     from: this.configService.get<string>('SMTP_USER'),
        //     to: userDetails.email,
        //     subject: '[GulyaevGYM] Подтверждение аккаунта',
        //     text: '',
        //     html:
        //         `
        //             <div>
        //                 <h1>Код подтверждения для регистрации в личном кабинете</h1>
        //                 <h3>${verifyCode}</h3>
        //             </div>
        //         `
        // })

        return newUser.save()
    }

    async findUser(findUserParams: Partial<{ id: number; email: string; username: string; }>, options?: Partial<{ selectAll: boolean; }>): Promise<User> {
        return
    }

    async saveUser(user: User): Promise<User> {
        return
    }

    async searchUsers(query: string): Promise<User[]> {
        return
    }
}
