"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_token_service_1 = require("../jwt-token.service");
let JwtAuthGuard = class JwtAuthGuard {
    jwtTokenService;
    constructor(jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException("Undefined Header");
        }
        const [type, token] = authHeader.split(' ');
        if (type != 'Bearer' || !token) {
            throw new common_1.UnauthorizedException('Token not found');
        }
        const payload = this.jwtTokenService.verifyToken(token);
        if (!payload) {
            throw new common_1.UnauthorizedException("Invalid or expired token");
        }
        request.user = payload;
        return true;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_token_service_1.JwtTokenService])
], JwtAuthGuard);
//# sourceMappingURL=jwt-auth.guard.js.map