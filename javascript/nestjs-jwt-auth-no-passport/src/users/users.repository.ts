import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../../generated/prisma/client.js";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findById(id: string){ 
        return this.prisma.user.findUnique({ where: { id }});
    }

    async findByEmail(email:string){
        return this.prisma.user.findUnique({where: { email }});
    }

    async create(data: Prisma.UserCreateInput){
        return this.prisma.user.create({data});
    }
    
    


}