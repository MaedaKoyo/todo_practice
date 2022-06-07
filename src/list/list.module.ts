import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListResolver } from './list.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ListService, ListResolver, PrismaService],
  exports: [ListService]
})
export class ListModule {}
