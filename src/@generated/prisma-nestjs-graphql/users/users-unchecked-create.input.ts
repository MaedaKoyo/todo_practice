import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ListUncheckedCreateNestedManyWithoutUserInput } from '../list/list-unchecked-create-nested-many-without-user.input';

@InputType()
export class UsersUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(8)
    password!: string;

    @Field(() => ListUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    list?: ListUncheckedCreateNestedManyWithoutUserInput;
}
