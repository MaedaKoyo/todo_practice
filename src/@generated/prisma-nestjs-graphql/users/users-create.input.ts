import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ListCreateNestedManyWithoutUserInput } from '../list/list-create-nested-many-without-user.input';

@InputType()
export class UsersCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(8)
    password!: string;

    @Field(() => ListCreateNestedManyWithoutUserInput, {nullable:true})
    list?: ListCreateNestedManyWithoutUserInput;
}
