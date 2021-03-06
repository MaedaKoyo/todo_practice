import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class List {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    deadline!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    done!: boolean;

    @Field(() => Users, {nullable:true})
    user?: Users | null;

    @Field(() => Int, {nullable:true})
    user_id!: number | null;
}
