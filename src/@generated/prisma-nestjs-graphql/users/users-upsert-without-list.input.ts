import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutListInput } from './users-update-without-list.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutListInput } from './users-create-without-list.input';

@InputType()
export class UsersUpsertWithoutListInput {

    @Field(() => UsersUpdateWithoutListInput, {nullable:false})
    @Type(() => UsersUpdateWithoutListInput)
    update!: UsersUpdateWithoutListInput;

    @Field(() => UsersCreateWithoutListInput, {nullable:false})
    @Type(() => UsersCreateWithoutListInput)
    create!: UsersCreateWithoutListInput;
}
