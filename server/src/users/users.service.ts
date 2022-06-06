import {
  BadRequestException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository, DataSource } from 'typeorm';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { ChannelMembers } from 'src/entities/ChannelMembers';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
    private dataSource: DataSource,
  ) {}

  async join(email: string, nickname: string, password: string) {
    // if (!email) {
    //   throw new BadRequestException('이메일이 없네요');
    // }
    // if (!nickname) {
    //   throw new BadRequestException('닉네임이 없네요');
    // }
    // if (!password) {
    //   throw new BadRequestException('비밀번호가 없네요');
    // }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const user = await queryRunner.manager
      .getRepository(Users)
      .findOne({ where: { email } });
    if (user) {
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const returned = await queryRunner.manager.getRepository(Users).save({
        email,
        nickname,
        password: hashedPassword,
      });
      await queryRunner.manager.getRepository(WorkspaceMembers).save({
        UserId: returned.id,
        WorkspaceId: 1,
      });
      await queryRunner.manager.getRepository(ChannelMembers).save({
        UserId: returned.id,
        ChannelId: 1,
      });
      await queryRunner.commitTransaction();
      return true;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
