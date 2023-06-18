import { User } from "./mongo/models/User";
import { Ads } from "src/utils/mongo/models/Ads"
import { Request } from "express";

export type CreateUserDetails = {
    username: string
    email: string
    password: string
};

export type FindUserParams = Partial<{
    id: number;
    email: string;
    username: string;
}>;


export type FindUserOptions = Partial<{
    selectAll: boolean;
}>;

export type LoginUserDetails = {
    email: string
    password: string
}

export type ValidateUserDetails = {
    username: string
    password: string
}

export interface CreateAdDetails extends Ads {}

export type Token = {
    token: string
}

export interface AuthenticatedRequest extends Request {
    user: User;
}

export interface UserRequest extends Request {
    user: User
}

export interface Attachment extends Express.Multer.File { }