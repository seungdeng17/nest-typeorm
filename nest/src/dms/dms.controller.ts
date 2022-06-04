import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    const { id, url } = param;
    const { perPage, page } = query;
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
