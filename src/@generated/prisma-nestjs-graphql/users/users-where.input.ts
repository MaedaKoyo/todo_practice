import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ListListRelationFilter } from '../list/list-list-relation-filter.input';

@InputType()
export class UsersWhereInput {

    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ListListRelationFilter, {nullable:true})
    list?: ListListRelationFilter;
}
