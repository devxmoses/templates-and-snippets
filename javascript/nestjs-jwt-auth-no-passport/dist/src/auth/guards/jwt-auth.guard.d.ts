import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtTokenService } from "../jwt-token.service";
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwtTokenService;
    constructor(jwtTokenService: JwtTokenService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
