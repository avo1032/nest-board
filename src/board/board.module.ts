import { BoardController } from './board.controller';
import { Module } from '@nestjs/common';
import { BoardService } from './board.service';

@Module({
  providers: [BoardController, BoardService],
})
export class BoardModule {}
