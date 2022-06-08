import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ListUncheckedCreateNestedManyWithoutUserInput } from '../list/list-unchecked-create-nested-many-without-user.input';

@InputType()
export class UsersUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ListUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    list?: ListUncheckedCreateNestedManyWithoutUserInput;
}
