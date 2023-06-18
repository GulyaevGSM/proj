import { User } from "src/utils/mongo/models/User";
import { CreateUserDetails, LoginUserDetails, Token, ValidateUserDetails } from "src/utils/types";

export interface IAuthService {
    validateUser(validateUserDetails: ValidateUserDetails): Promise<any>
}
