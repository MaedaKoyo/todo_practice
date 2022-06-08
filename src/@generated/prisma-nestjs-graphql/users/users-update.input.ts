import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ListUpdateManyWithoutUserInput } from '../list/list-update-many-without-user.input';

@InputType()
export class UsersUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ListUpdateManyWithoutUserInput, {nullable:true})
    list?: ListUpdateManyWithoutUserInput;
}
