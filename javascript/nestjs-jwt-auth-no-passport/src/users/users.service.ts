import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '../../generated/prisma/client.js';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService { 
    constructor(private readonly usersRepository: UsersRepository){}
    
    async getUserById(id: string){
        return this.usersRepository.findById(id);
    }

    async getUserByEmail(email: string):Promise<User | null>{
        return this.usersRepository.findByEmail(email);
    }

    async createUser(dto: UserDto): Promise<User> {
        return this.usersRepository.create(dto);
    }

    getUsers():string{
        return 'This action returns all users'; 
    }



}

