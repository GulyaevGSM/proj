import { Controller, Inject } from '@nestjs/common';
import { AdsService } from './ads.service';
import { Services } from 'src/utils/constants';
import { IAdsService } from './interfaces/ads';

@Controller('ads')
export class AdsController {
  constructor(@Inject(Services.ADS) private readonly adsService: IAdsService) { }


}
