import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    messages: { type: Array, default: [] },
    rating: { type: Number, default: 0 },
    ads: { type: Array, default: [] },
    verifyCode: { type: String, required: true },
    isVerify: { type: Boolean, default: false }
}, { timestamps: true })

export interface User extends mongoose.Document {
    id: string
    username: string
    email: string
    password: string
    messages: []
    ads: []
    verifyCode: string
    isVerify: boolean
}