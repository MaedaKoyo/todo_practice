import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UsersUpdateOneWithoutListInput } from '../users/users-update-one-without-list.input';

@InputType()
export class ListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    deadline?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    done?: BoolFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneWithoutListInput, {nullable:true})
    user?: UsersUpdateOneWithoutListInput;
}
