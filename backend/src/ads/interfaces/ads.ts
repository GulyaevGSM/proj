import { Ads } from "src/utils/mongo/models/Ads"
import { CreateAdDetails } from "src/utils/types"

export interface IAdsService {
    createAd(adDetails: CreateAdDetails): Promise<Ads>
    updateAd(adDetails: CreateAdDetails): Promise<Ads>
    deleteAd(): Promise<any>
}
