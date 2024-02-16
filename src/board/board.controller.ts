import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post()
  create(@Body() data: CreateBoardDto) {
    // return this.boardService.create(data);
  }
}
