import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { List } from 'src/@generated/prisma-nestjs-graphql/list/list.model'
import { ListService } from 'src/list/list.service'
import { FindFirstListArgs } from 'src/@generated/prisma-nestjs-graphql/list/find-first-list.args';
import {FindManyListArgs} from 'src/@generated/prisma-nestjs-graphql/list/find-many-list.args';
import { CreateOneListArgs } from 'src/@generated/prisma-nestjs-graphql/list/create-one-list.args';
import {UpdateOneListArgs} from 'src/@generated/prisma-nestjs-graphql/list/update-one-list.args';
import {DeleteOneListArgs} from 'src/@generated/prisma-nestjs-graphql/list/delete-one-list.args'



@Resolver(() => List)
export class ListResolver {
    constructor(private readonly listService: ListService) {}
    

    //上の一件だけ
    @Query(() => List)
    readFirst(
        @Args() args: FindFirstListArgs
    ){
        return this.listService.findFirst(args)
    }


    //全件取得
    @Query(() => [List])
    readAll(
        @Args() args: FindManyListArgs
    ){
        return this.listService.findMany(args)
    }

    //データ入れる
    @Mutation(() => List)
    createList(
        @Args() args: CreateOneListArgs
    ){
        return this.listService.createList(args)
    }

    //アップデート
    @Mutation(() => List)
    updateList(
        @Args() args: UpdateOneListArgs
    ){
        return this.listService.updateList(args)
    }

    //削除
    @Mutation(() => List)
    deleteList(
        @Args() args: DeleteOneListArgs
    ){
        return this.listService.deleteList(args)
    }
}

