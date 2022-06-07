import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { List } from 'src/@generated/prisma-nestjs-graphql/list/list.model'
import { FindFirstListArgs } from 'src/@generated/prisma-nestjs-graphql/list/find-first-list.args';
//import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/list/find-unique-list.args';
import {FindManyListArgs} from 'src/@generated/prisma-nestjs-graphql/list/find-many-list.args';
import { CreateOneListArgs } from 'src/@generated/prisma-nestjs-graphql/list/create-one-list.args';
import {UpdateOneListArgs} from 'src/@generated/prisma-nestjs-graphql/list/update-one-list.args';
import {DeleteOneListArgs} from 'src/@generated/prisma-nestjs-graphql/list/delete-one-list.args'


@Injectable()
export class ListService {
    constructor(private readonly prisma: PrismaService) {}

    //一番上だけ取る
    async findFirst(args: FindFirstListArgs): Promise<List | null> {
        return this.prisma.list.findFirst(args)
    }

    //全件取得
    async findMany(args: FindManyListArgs): Promise<List[] | null>{
        return this.prisma.list.findMany(args);
    }

    //データ入れる
    async createList(args: CreateOneListArgs): Promise<List | null>{
        return this.prisma.list.create(args)
    }

    //アップデート
    async updateList(args: UpdateOneListArgs): Promise<List | null>{
        return this.prisma.list.update(args)
    }

    //削除
    async deleteList(args: DeleteOneListArgs): Promise<List | null>{
        return this.prisma.list.delete(args)
    }
}
