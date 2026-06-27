# 🔒 NestJS JWT Authentication (Without Passport)

A lightweight, high-performance authentication snippet for NestJS using the native `@nestjs/jwt` module directly, bypassing the overhead of Passport.js. This setup utilizes a custom `AuthGuard` to [...]

## 🚀 Why No Passport?
* **Zero Overhead:** Eliminates extra dependencies (`@nestjs/passport` and `passport-jwt`).
* **Complete Control:** Full ownership over the token extraction, verification logic, and error handling.
* **Modern NestJS Stack:** Built using native NestJS guards, execution contexts, and decorators.

## 📁 Snippet Components

This snippet consists of three core building blocks:

1. **`auth.module.ts`**: Configures the asynchronous `JwtModule` with your environment secrets.
2. **`auth.service.ts`**: Handles user validation, password hashing/comparison, and token generation.
3. **`auth.guard.ts`**: A custom `CanActivate` guard that extracts the Bearer token, verifies it, and attaches the payload to the request context.

## ⚙️ Prerequisites

Ensure you have the required peer dependencies installed in your target NestJS project:

```bash
npm i @nestjs/jwt bcrypt
npm i -D @types/bcrypt
```

## 🛠️ Implementation Guide

### 1. The Custom Auth Guard
Protect your routes by applying the custom guard locally or globally.

```typescript
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      // Attach the payload to the request object so controllers can access it
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
```

### 2. Guard Usage
Apply it to your controllers or specific endpoints using the `@UseGuards` decorator:

```typescript
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { CustomAuthGuard } from './auth.guard';

@Controller('profile')
export class ProfileController {
  @UseGuards(CustomAuthGuard)
  @Get()
  getProfile(@Req() req) {
    return req.user; // Contains the verified JWT payload
  }
}
```

---
*Part of the [Developer Toolbox](https://github.com) snippet library.*
