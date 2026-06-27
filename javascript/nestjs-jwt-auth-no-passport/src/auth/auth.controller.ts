import { Controller, Post, Body, UseGuards, Get, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService){}

    @Post('register')
    register(@Body() dto: RegisterDto){
        return this.authService.registerUser(dto)
    }

    @Post('login')
    login(@Body() dto: LoginDto){
        return this.authService.loginUser(dto);
    }

    @Post('refresh')
    async refresh(@Body() body:{refreshToken:string}){
        return this.authService.refreshAccessToken(body.refreshToken);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req:any){
        return {data:'Authenticated User Data', user:req.user}
    }
     

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@User() user:any){
        return user;
    }

}
