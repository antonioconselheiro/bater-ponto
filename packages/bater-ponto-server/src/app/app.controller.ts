import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-shared-domain';

@Controller('pontos/datas')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  criarDiaTrabalho(@Body() data: DataInputDto): DataOutputDto {
    return this.appService.criarDiaTrabalho(data);
  }

  @Get()
  listarDias(): DataOutputDto[] {
    return this.appService.listarDias();
  }

  @Get(':idData')
  listarPontosHoje(@Param('idData') idData: string): DataOutputDto {
    return this.appService.listarPontosHoje(idData);
  }

  @Delete(':idData')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletarDiaTrabalho(@Param('idData') idData: string): void {
    return this.appService.deletarDiaTrabalho(idData);
  }

  @Post(':idData/horas')
  baterPonto(@Param('idData') idData: string, @Body() data: HoraInputDto): HoraOutputDto {
    return this.appService.baterPonto(idData, data);
  }

  @Delete(':idData/horas/:idHora')
  @HttpCode(HttpStatus.NO_CONTENT)
  deletarPonto(
    @Param('idData') idData: string,
    @Param('idHora') idHora: string
  ): void {
    return this.appService.deletarPonto(idData, idHora);
  }

}
