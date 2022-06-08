import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutListInput } from './users-create-without-list.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutListInput } from './users-create-or-connect-without-list.input';
import { UsersUpsertWithoutListInput } from './users-upsert-without-list.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutListInput } from './users-update-without-list.input';

@InputType()
export class UsersUpdateOneWithoutListInput {

    @Field(() => UsersCreateWithoutListInput, {nullable:true})
    @Type(() => UsersCreateWithoutListInput)
    create?: UsersCreateWithoutListInput;

    @Field(() => UsersCreateOrConnectWithoutListInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutListInput)
    connectOrCreate?: UsersCreateOrConnectWithoutListInput;

    @Field(() => UsersUpsertWithoutListInput, {nullable:true})
    @Type(() => UsersUpsertWithoutListInput)
    upsert?: UsersUpsertWithoutListInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutListInput, {nullable:true})
    @Type(() => UsersUpdateWithoutListInput)
    update?: UsersUpdateWithoutListInput;
}
