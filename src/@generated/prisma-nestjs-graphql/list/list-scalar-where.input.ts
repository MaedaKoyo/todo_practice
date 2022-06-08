import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ListScalarWhereInput {

    @Field(() => [ListScalarWhereInput], {nullable:true})
    AND?: Array<ListScalarWhereInput>;

    @Field(() => [ListScalarWhereInput], {nullable:true})
    OR?: Array<ListScalarWhereInput>;

    @Field(() => [ListScalarWhereInput], {nullable:true})
    NOT?: Array<ListScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deadline?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    done?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;
}
