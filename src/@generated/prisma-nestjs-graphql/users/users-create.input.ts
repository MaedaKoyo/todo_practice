import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateNestedManyWithoutUserInput } from '../list/list-create-nested-many-without-user.input';

@InputType()
export class UsersCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ListCreateNestedManyWithoutUserInput, {nullable:true})
    list?: ListCreateNestedManyWithoutUserInput;
}
