import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

import { Users } from '../entities/Users';
import { AuthService } from './auth.service';
import { LocalSerializer } from './local-serializer';
import { LocalStrategy } from './local-strategy';

@Module({
  imports: [
    PassportModule.register({ session: true }), // jwt 기반에선 session: false
    TypeOrmModule.forFeature([Users]),
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
