import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CheckUserDto } from './dtos/CheckUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuthService } from 'src/auth/interfaces/auth';
import { Token } from 'src/utils/types';
import { compareHash } from 'src/utils/helpers';
import { User } from 'src/utils/mongo/models/User';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async validateUser(checkUserDto: CheckUserDto) {
        const user = await this.userModel.findOne({ email: checkUserDto.username })

        if (!user)
            throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED)

        const isPasswordValid = await compareHash(
            checkUserDto.password,
            user.password
        );
        return isPasswordValid ? user : null
    }


}
