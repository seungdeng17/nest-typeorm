import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
    example: 'testUrl',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
    example: 'testId',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
    example: '20',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
    example: '1',
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    const { id, url } = param;
    const { perPage, page } = query;
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
