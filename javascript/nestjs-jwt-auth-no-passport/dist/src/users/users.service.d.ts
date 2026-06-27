import { UsersRepository } from './users.repository';
import { User } from '../../generated/prisma/client.js';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        password: string | null;
        firstName: string;
        lastName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        isEmailVerified: boolean;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(dto: UserDto): Promise<User>;
    getUsers(): string;
}
