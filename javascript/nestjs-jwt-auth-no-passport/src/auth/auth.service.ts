import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto'
import { UsersService }from '../users/users.service';
import { JwtTokenService } from './jwt-token.service';
import * as bcrypt from 'bcrypt';

@Injectable()  
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtTokenService: JwtTokenService

    ){}
    async registerUser(dto:RegisterDto){
        const existingUser = await this.usersService.getUserByEmail(dto.email);
        if(existingUser){
            throw new ConflictException('Email already in use');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.usersService.createUser({
            ...dto,
            password: hashedPassword
        });
        const access_token = this.jwtTokenService.generateAccessToken(user.id,user.email);
        const refresh_token = this.jwtTokenService.generateRefreshToken(user.id,user.email);
        return {access_token, refresh_token};    
    }

    async loginUser(dto: LoginDto){
        const user = await this.usersService.getUserByEmail(dto.email);
        if(!user){
            throw new UnauthorizedException('Invalid Login')
        }
        if(user.password === null ){
            //if OAuth User, return link account to google account 
            throw new UnauthorizedException('Invalid Login');
        } 
        const passwordValid = await bcrypt.compare(dto.password, user.password);
        if(!passwordValid){
            throw new UnauthorizedException('Invalid Login')
        }
        
        const access_token = this.jwtTokenService.generateAccessToken(user.id,user.email);
        const refresh_token = this.jwtTokenService.generateRefreshToken(user.id, user.email);
        
        return {access_token,refresh_token};
    }

    async refreshAccessToken(refreshToken:string){
        const payload = this.jwtTokenService.verifyToken(refreshToken)
        
        if(!payload){
            throw new UnauthorizedException("Invalid refresh token")
        }

        const access_token=this.jwtTokenService.generateAccessToken(payload.sub, payload.email);

        return {access_token}
        
    }


}
