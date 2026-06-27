import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtTokenService } from "../jwt-token.service";
@Injectable()

export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtTokenService:JwtTokenService){}

    canActivate(context:ExecutionContext):boolean | Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if(!authHeader){
            throw new UnauthorizedException("Undefined Header")
        }
        const [type,token]=authHeader.split(' ');
        if(type!='Bearer' || !token){
            throw new UnauthorizedException('Token not found')
        }
        const payload = this.jwtTokenService.verifyToken(token);
        if(!payload){
            throw new UnauthorizedException("Invalid or expired token")
        }

        request.user = payload;

        return true;
    }
}
