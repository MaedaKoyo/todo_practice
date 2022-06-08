import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    deadline?: string;

    @Field(() => Boolean, {nullable:true})
    done?: boolean;

    @Field(() => Int, {nullable:true})
    user_id?: number;
}
