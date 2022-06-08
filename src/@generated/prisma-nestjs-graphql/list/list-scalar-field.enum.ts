import { registerEnumType } from '@nestjs/graphql';

export enum ListScalarFieldEnum {
    id = "id",
    title = "title",
    deadline = "deadline",
    done = "done",
    user_id = "user_id"
}


registerEnumType(ListScalarFieldEnum, { name: 'ListScalarFieldEnum', description: undefined })
