import { Injectable } from '@nestjs/common';
import { IConverter } from './shared/converter/converter.interface';
import { HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { HoraEntity } from './entity/hora.entity';
import { BaseEntity } from 'typeorm';

@Injectable()
export class HoraConverter implements IConverter<HoraInputDto | HoraOutputDto, HoraEntity, HoraOutputDto> {

  convert(arg: HoraEntity): HoraOutputDto;
  convert(arg: HoraInputDto | HoraOutputDto): HoraEntity;
  convert(hora: HoraInputDto | HoraOutputDto | HoraEntity): HoraEntity | HoraOutputDto {
    if (hora instanceof BaseEntity) {
      return this.convertEntityToOutput(hora);
    } else {
      return this.convertInputToEntity(hora);
    }
  }

  private convertInputToEntity(hora: HoraInputDto | HoraOutputDto): HoraEntity {
    const horaEntity = new HoraEntity();
   
    if ('id' in hora) {
      horaEntity.id = hora.id;
    }

    if (hora.descricao) {
      horaEntity.descricao = hora.descricao;
    } else {
      horaEntity.descricao = '';
    }
    
    horaEntity.hora = hora.hora;
    return horaEntity;
  }

  private convertEntityToOutput(hora: HoraEntity): HoraOutputDto {
    return {
      id: hora.id,
      descricao: hora.descricao,
      hora: hora.hora
    }
  }
}
