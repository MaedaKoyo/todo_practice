import { registerEnumType } from '@nestjs/graphql';

export enum ListScalarFieldEnum {
    id = "id",
    title = "title",
    deadline = "deadline",
    done = "done"
}


registerEnumType(ListScalarFieldEnum, { name: 'ListScalarFieldEnum', description: undefined })
