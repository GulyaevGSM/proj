import * as mongoose from 'mongoose';

export const AdsModel = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    images: [String],
    video: { type: String },
    characteristic: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    place: { type: String, required: true },
    numberPhone: { type: Number }
}, { timestamps: true })

export interface Ads extends mongoose.Document {
    id: string
    category: string
    title: string
    images: []
    video: string;
    characteristic: string
    description: string
    price: number;
    place: string
    numberPhone: number
}