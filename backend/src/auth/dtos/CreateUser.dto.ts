import { IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(16)
    username: string

    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(32)
    password: string
}
