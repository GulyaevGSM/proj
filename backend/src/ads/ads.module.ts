import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { AdsModel } from 'src/utils/mongo/models/Ads';
import { MongooseModule } from '@nestjs/mongoose';
import { Services } from 'src/utils/constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ads', schema: AdsModel }]),
  ],
  controllers: [AdsController],
  providers: [
    {
      provide: Services.ADS,
      useClass: AdsService
    }
  ],
  exports: [
    {
      provide: Services.ADS,
      useClass: AdsService
    }
  ]
})
export class AdsModule { }
