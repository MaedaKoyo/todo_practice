import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { UsersAvgOrderByAggregateInput } from './users-avg-order-by-aggregate.input';
import { UsersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { UsersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';
import { UsersSumOrderByAggregateInput } from './users-sum-order-by-aggregate.input';

@InputType()
export class UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => UsersCountOrderByAggregateInput, {nullable:true})
    _count?: UsersCountOrderByAggregateInput;

    @Field(() => UsersAvgOrderByAggregateInput, {nullable:true})
    _avg?: UsersAvgOrderByAggregateInput;

    @Field(() => UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersMaxOrderByAggregateInput;

    @Field(() => UsersMinOrderByAggregateInput, {nullable:true})
    _min?: UsersMinOrderByAggregateInput;

    @Field(() => UsersSumOrderByAggregateInput, {nullable:true})
    _sum?: UsersSumOrderByAggregateInput;
}
