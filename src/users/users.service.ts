import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import {DeleteOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import {UpdateOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';
import {FindUniqueUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/find-unique-users.args'

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    //careate  user
    async createUser(args: CreateOneUsersArgs): Promise<Users | null> {
        return this.prisma.users.create(args);
    }

    //delete user
    async deleteUser(args: DeleteOneUsersArgs): Promise<Users | null> {
        return this.prisma.users.delete(args);
    }

    //update user
    async updateUser(args: UpdateOneUsersArgs): Promise<Users | null> {
        return this.prisma.users.update(args);
    }

    //find unique user
    async findUser(args: FindUniqueUsersArgs): Promise<Users> {
        return this.prisma.users.findUnique(args);
    }
}
