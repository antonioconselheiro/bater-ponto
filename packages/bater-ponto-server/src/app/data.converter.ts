import { DataInputDto, DataOutputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { Injectable } from '@nestjs/common';
import { DataEntity } from './entity/data.entity';
import { IConverter } from './shared/converter/converter.interface';
import { BaseEntity } from 'typeorm';
import { HoraConverter } from './hora.converter';
import { HoraEntity } from './entity/hora.entity';

@Injectable()
export class DataConverter implements IConverter<DataInputDto | DataOutputDto, DataEntity, DataOutputDto> {

  constructor(
    private horaConverter: HoraConverter
  ) {}

  convert(data: DataEntity): DataOutputDto;
  convert(data: DataInputDto | DataOutputDto): DataEntity;
  convert(data: DataInputDto | DataOutputDto | DataEntity): DataOutputDto | DataEntity {
    if (data instanceof BaseEntity) {
      return this.convertEntityToOutput(data);
    } else {
      return this.convertInputToEntity(data);
    }
  }

  private convertInputToEntity(data: DataInputDto | DataOutputDto): DataEntity {
    const dataEntity = new DataEntity();

    if ('id' in data) {
      dataEntity.id = data.id;
    }
    
    if ('pontos' in data) {
      dataEntity.pontos = this.convertDataPontosOutputToEntity(data.pontos);
    }

    dataEntity.dia = data.dia;
    return dataEntity;
  }
  
  private convertEntityToOutput(data: DataEntity): DataOutputDto {
    const output: DataOutputDto = {
      id: data.id,
      dia: data.dia,
      pontos: []
    };

    if (data.pontos) {
      output.pontos = this.convertDataPontosEntityToOutput(data.pontos)
    }

    return output;
  }

  private convertDataPontosOutputToEntity(pontos: HoraOutputDto[]): HoraEntity[] {
    return pontos.map(ponto => this.horaConverter.convert(ponto))
  }

  private convertDataPontosEntityToOutput(pontos: HoraEntity[]): HoraOutputDto[] {
    return pontos.map(ponto => this.horaConverter.convert(ponto))
  } 

}
