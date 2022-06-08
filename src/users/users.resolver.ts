import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import {DeleteOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import {UpdateOneUsersArgs} from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';


@Resolver(() => Users)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}


    //create user
    @Mutation(() => Users)
    async createUser(
        @Args() args: CreateOneUsersArgs
    ){
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
}
