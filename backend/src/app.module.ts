import { Module } from '@nestjs/common'
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdsModule } from './ads/ads.module';
import { GatewayModule } from './gateway/gateway.module';

const envFilePath = '.env'

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    JwtModule.register({}),
    PassportModule.register({ session: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI')
      })
    }),
    EventEmitterModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 10
    }),
    AdsModule,
    GatewayModule,
  ]
})
export class AppModule { }
