import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Attachment } from './types';
import * as sharp from 'sharp';

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
}

export const compareHash = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
}

export const generateUUIDV4 = () => uuidv4()

export const compressionImage = async (attachment: Attachment) =>
    sharp(attachment.buffer).resize(300).jpeg().toBuffer();