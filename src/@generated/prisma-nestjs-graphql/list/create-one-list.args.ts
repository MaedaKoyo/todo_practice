import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListCreateInput } from './list-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneListArgs {

    @Field(() => ListCreateInput, {nullable:false})
    @Type(() => ListCreateInput)
    @ValidateNested()
    @Type(() => ListCreateInput)
    data!: ListCreateInput;
}
