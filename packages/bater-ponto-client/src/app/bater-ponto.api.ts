import { Injectable } from '@angular/core';
import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { environment } from '../environments/environment';
import { HttpValidatorService } from './shared/http-validator/http-validator.service';

@Injectable()
export class BaterPontoApi {

  constructor(
    private readonly httpValidatorService: HttpValidatorService
  ) { }

  listarDias(): Promise<DataOutputDto[]> {
    return this.httpValidatorService.get<DataOutputDto, DataOutputDto[]>(
      `${environment.server}pontos/datas`, DataOutputDto
    )
  }

  getData(idData: number): Promise<DataOutputDto> {
    return this.httpValidatorService.get<DataOutputDto>(
      `${environment.server}pontos/datas/${idData}`, DataOutputDto
    )
  }

  criarDia(dataInput: DataInputDto): Promise<DataOutputDto> {
    return this.httpValidatorService.post<DataOutputDto>(
      `${environment.server}pontos/datas`, DataOutputDto, dataInput
    )
  }

  deletarDia(idData: number): Promise<void> {
    return this.httpValidatorService.delete(
      `${environment.server}pontos/datas/${idData}`
    )
  }

  baterPonto(idData: number, hora: HoraInputDto): Promise<HoraOutputDto> {
    return this.httpValidatorService.post<HoraOutputDto>(
      `${environment.server}pontos/datas/${idData}/horas`, HoraOutputDto, hora
    )
  }

  deletarPonto(idData: number, idHora: number): Promise<void> {
    return this.httpValidatorService.delete(
      `${environment.server}pontos/datas/${idData}/horas/${idHora}`
    )
  }

}
