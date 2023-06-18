import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Services } from 'src/utils/constants';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModel } from 'src/utils/mongo/models/User';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserModel }]),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('SMTP_HOST'),
          port: configService.get('SMTP_PORT'),
          secure: true,
          auth: {
            user: configService.get('SMTP_USER'),
            pass: 'usynvshenadkkhzh'
          }
        }
      })
    })
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService
    }
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UsersService
    }
  ]
})
export class UsersModule { }
