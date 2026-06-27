import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { JwtTokenService } from './jwt-token.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtTokenService;
    constructor(usersService: UsersService, jwtTokenService: JwtTokenService);
    registerUser(dto: RegisterDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    loginUser(dto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshAccessToken(refreshToken: string): Promise<{
        access_token: string;
    }>;
}
