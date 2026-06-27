import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(body: {
        refreshToken: string;
    }): Promise<{
        access_token: string;
    }>;
    getMe(req: any): {
        data: string;
        user: any;
    };
    getProfile(user: any): any;
}
