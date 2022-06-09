import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { List } from '../list/list.model';
import { UsersCount } from './users-count.output';

@ObjectType()
export class Users {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @HideField()
    password!: string;

    @Field(() => [List], {nullable:true})
    list?: Array<List>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
