import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class ListOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deadline?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    done?: keyof typeof SortOrder;

    @Field(() => UsersOrderByWithRelationInput, {nullable:true})
    user?: UsersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}
