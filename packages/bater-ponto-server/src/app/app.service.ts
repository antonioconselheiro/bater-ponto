import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  indexData: { [idData: string]: DataOutputDto } = {};
  indexHora: { [idHora: string]: HoraOutputDto } = {};

  autoincrement = 1;

  listarDias(): DataOutputDto[] {
    return Object.values(this.indexData);
  }

  getData(idData: number): DataOutputDto {
    return this.indexData[idData];
  }

  criarDia(dataInput: DataInputDto): DataOutputDto {
    const id = this.autoincrement++;
    const dataOutput = new DataOutputDto(id, dataInput.dia);
    this.indexData[id] = dataOutput;
    return dataOutput;
  }

  deletarDia(idData: number): void {
    delete this.indexData[idData];
  }

  baterPonto(idData: number, hora: HoraInputDto): HoraOutputDto {
    const id = this.autoincrement++;
    const horaOutput = { id, ...hora };
    this.indexHora[id] = horaOutput;

    return horaOutput;
  }

  deletarPonto(idData: number, idHora: number): void {
    const dataOutput = this.indexData[idData];
    const index = dataOutput.pontos.findIndex(hora => hora.id === idHora);
    dataOutput.pontos.splice(index, 1);
    delete this.indexHora[idHora];
  }

}
