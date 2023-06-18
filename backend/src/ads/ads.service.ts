import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ads } from 'src/utils/mongo/models/Ads';
import { IAdsService } from './interfaces/ads';
import { CreateAdDetails } from 'src/utils/types';

@Injectable()
export class AdsService implements IAdsService {
    constructor(
        @InjectModel('Ads') private readonly adsModel: Model<Ads>,
    ) { }

    createAd(adDetails: CreateAdDetails): Promise<Ads> {
        return
    }


    updateAd(adDetails: CreateAdDetails): Promise<Ads> {
        return
    }

    deleteAd(): Promise<Ads> {
        return
    }
}
