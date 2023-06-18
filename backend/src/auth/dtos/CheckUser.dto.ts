import { IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

export class CheckUserDto {
    @IsNotEmpty()
    @IsEmail()
    username: string

    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(32)
    password: string
}