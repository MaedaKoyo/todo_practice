import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutListInput } from '../users/users-create-nested-one-without-list.input';

@InputType()
export class ListCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    deadline!: string;

    @Field(() => Boolean, {nullable:true})
    done?: boolean;

    @Field(() => UsersCreateNestedOneWithoutListInput, {nullable:false})
    user!: UsersCreateNestedOneWithoutListInput;
}
