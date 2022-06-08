import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutListInput } from './users-create-without-list.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutListInput } from './users-create-or-connect-without-list.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutListInput {

    @Field(() => UsersCreateWithoutListInput, {nullable:true})
    @Type(() => UsersCreateWithoutListInput)
    create?: UsersCreateWithoutListInput;

    @Field(() => UsersCreateOrConnectWithoutListInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutListInput)
    connectOrCreate?: UsersCreateOrConnectWithoutListInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;
}
