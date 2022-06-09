import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutListInput } from '../users/users-update-one-required-without-list.input';

@InputType()
export class ListUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    deadline?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    done?: BoolFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutListInput, {nullable:true})
    user?: UsersUpdateOneRequiredWithoutListInput;
}
