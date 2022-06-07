import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ListWhereInput {

    @Field(() => [ListWhereInput], {nullable:true})
    AND?: Array<ListWhereInput>;

    @Field(() => [ListWhereInput], {nullable:true})
    OR?: Array<ListWhereInput>;

    @Field(() => [ListWhereInput], {nullable:true})
    NOT?: Array<ListWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deadline?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    done?: BoolFilter;
}
