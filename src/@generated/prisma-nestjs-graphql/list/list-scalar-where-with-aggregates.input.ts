import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ListScalarWhereWithAggregatesInput {

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    deadline?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    done?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    user_id?: IntNullableWithAggregatesFilter;
}
