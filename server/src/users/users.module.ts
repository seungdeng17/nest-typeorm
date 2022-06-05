import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// nest g module users
@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
