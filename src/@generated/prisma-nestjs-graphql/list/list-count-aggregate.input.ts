import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    deadline?: true;

    @Field(() => Boolean, {nullable:true})
    done?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
