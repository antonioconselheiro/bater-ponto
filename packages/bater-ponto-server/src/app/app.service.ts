import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-shared-domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private indexData: { [idData: string]: DataOutputDto } = {};
  private indexHora: { [idHora: string]: HoraOutputDto } = {};

  private autoComplete = 1;

  criarDiaTrabalho(data: DataInputDto): DataOutputDto {
    const id = this.autoComplete++;
    const output = new DataOutputDto(id, data.data);
    output.descricao = data.descricao;
    this.indexData[id] = output;
    return output;
  }

  listarDias(): DataOutputDto[] {
    return Object.values(this.indexData);
  }

  listarPontosHoje(idData: string): DataOutputDto {
    return this.indexData[idData];
  }

  deletarDiaTrabalho(idData: string): void {
    delete this.indexData[idData];
  }

  baterPonto(idData: string, hora: HoraInputDto): HoraOutputDto {
    const id = this.autoComplete++;
    const output = { id, ...hora };
    const data = this.indexData[idData];

    data.pontos.push(output);
    this.indexHora[id] = output;

    return output;
  }

  deletarPonto(idData: string, idHora: string): void {
    const data = this.indexData[idData];
    const index = data.pontos.findIndex(ponto => String(ponto.id) === idHora);
    data.pontos.splice(index, 1);

    delete this.indexHora[idHora];
  }

}
