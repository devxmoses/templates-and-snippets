import { Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
    constructor(private readonly jwtService:JwtService){}

    generateAccessToken(userId:string,email:string):string{
        const payload = {sub:userId,email};
        return this.jwtService.sign(payload,{expiresIn:'1h'});
    }

    generateRefreshToken(userId:string, email:string):string{
        const payload={sub:userId, email};
        return this.jwtService.sign(payload, {expiresIn: '7d'});
    }

    verifyToken(token:string):any{
        try{
            return this.jwtService.verify(token);
        }catch(error){
            return null;
        }
    }
}
