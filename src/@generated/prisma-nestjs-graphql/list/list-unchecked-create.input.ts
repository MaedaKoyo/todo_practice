import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ListUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    deadline!: string;

    @Field(() => Boolean, {nullable:true})
    done?: boolean;

    @Field(() => Int, {nullable:false})
    user_id!: number;
}
