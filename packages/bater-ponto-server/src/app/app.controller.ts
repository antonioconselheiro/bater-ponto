import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';

@Controller('pontos/datas')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) { }

  @Get()
  listarDias(): Promise<DataOutputDto[]> {
    return this.appService.listarDias();
  }

  @Get(':idData')
  getData(@Param('idData', ParseIntPipe) idData: number): Promise<DataOutputDto | null> {
    return this.appService.getData(idData);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  criarDia(@Body() dataInput: DataInputDto): Promise<DataOutputDto> {
    return this.appService.criarDia(dataInput);
  }

  @Delete(':idData')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletarDia(@Param('idData', ParseIntPipe) idData: number): Promise<void> {
    return this.appService.deletarDia(idData);
  }

  @Post(':idData/horas')
  @HttpCode(HttpStatus.CREATED)
  baterPonto(
    @Param('idData', ParseIntPipe) idData: number,
    @Body() hora: HoraInputDto
  ): Promise<HoraOutputDto> {
    return this.appService.baterPonto(idData, hora);
  }

  @Delete('horas/:idHora')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletarPonto(
    @Param('idHora', ParseIntPipe) idHora: number
  ): Promise<void> {
    return this.appService.deletarPonto(idHora);
  }
}
