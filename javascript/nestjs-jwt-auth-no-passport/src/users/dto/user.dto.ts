import { IsEmail, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsString()
    firstName!: string;

    @IsString()
    lastName!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    password!: string;
}

export class UserResponseDto {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    createdAt!: Date;
}