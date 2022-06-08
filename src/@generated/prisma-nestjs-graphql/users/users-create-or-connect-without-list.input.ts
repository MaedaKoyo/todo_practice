import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutListInput } from './users-create-without-list.input';

@InputType()
export class UsersCreateOrConnectWithoutListInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutListInput, {nullable:false})
    @Type(() => UsersCreateWithoutListInput)
    create!: UsersCreateWithoutListInput;
}
