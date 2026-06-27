import { JwtService } from '@nestjs/jwt';
export declare class JwtTokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateAccessToken(userId: string, email: string): string;
    generateRefreshToken(userId: string, email: string): string;
    verifyToken(token: string): any;
}
