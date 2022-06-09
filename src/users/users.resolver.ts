import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import {DeleteOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import {UpdateOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';
import {FindUniqueUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/find-unique-users.args'
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@Resolver(() => Users)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}


    //create user
    @Mutation(() => Users)
    async createUser(
        @Args() args: CreateOneUsersArgs
    ){
        args.data.password = await bcrypt.hash(args.data.password, 10);
        return this.userService.createUser(args)
    }

    //delete usser
    @Mutation(() => Users)
    async deleteUser(
        @Args() args: DeleteOneUsersArgs
    ){
        return this.userService.deleteUser(args)
    }

    //update user
    @Mutation(() => Users)
    async updateUser(
        @Args() args:UpdateOneUsersArgs
    ){
        return this.userService.updateUser(args);
    }

    //finduser
    @Query(() => Users)
    @UseGuards(JwtAuthGuard)
    async findUser(
        @Args() args:FindUniqueUsersArgs
    ){
        return this.userService.findUser(args);
    }

}
