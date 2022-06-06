import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from 'src/entities/Users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { ChannelMembers } from 'src/entities/ChannelMembers';

// nest g module users
@Module({
  imports: [
    TypeOrmModule.forFeature([Users, WorkspaceMembers, ChannelMembers]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
