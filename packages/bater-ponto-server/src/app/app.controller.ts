import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pontos')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) { }

  @Post()
  marcarPonto(@Body() body: { ponto: string }): string[] {
    return this.appService.marcarPonto(body.ponto);
  }

  @Get()
  listarPonto(): string[] {
    return this.appService.listarPonto();
  }

  @Delete(':index')
  deletarPonto(@Param('index', ParseIntPipe) index: number): string[] {
    return this.appService.deletarPonto(index);
  }
}
