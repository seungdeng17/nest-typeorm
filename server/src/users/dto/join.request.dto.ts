import { ApiProperty, PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

// 데이터를 전달하는 오브젝트
export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {
  // @ApiProperty({
  //   example: 'test@test.com',
  //   description: '이메일',
  //   required: true,
  // })
  // public email: string;
  // @ApiProperty({
  //   example: 'test',
  //   description: '닉네임',
  //   required: true,
  // })
  // public nickname: string;
  // @ApiProperty({
  //   example: 'testtest',
  //   description: '비밀번호',
  //   required: true,
  // })
  // public password: string;
}
