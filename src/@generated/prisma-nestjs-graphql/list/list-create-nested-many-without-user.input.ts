import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutUserInput } from './list-create-without-user.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutUserInput } from './list-create-or-connect-without-user.input';
import { ListWhereUniqueInput } from './list-where-unique.input';

@InputType()
export class ListCreateNestedManyWithoutUserInput {

    @Field(() => [ListCreateWithoutUserInput], {nullable:true})
    @Type(() => ListCreateWithoutUserInput)
    create?: Array<ListCreateWithoutUserInput>;

    @Field(() => [ListCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ListCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ListCreateOrConnectWithoutUserInput>;

    @Field(() => [ListWhereUniqueInput], {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: Array<ListWhereUniqueInput>;
}
