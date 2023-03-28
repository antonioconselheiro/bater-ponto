import { DataInputDto, DataOutputDto, HoraInputDto, HoraOutputDto } from '@bater-ponto/bater-ponto-domain';
import { Injectable } from '@nestjs/common';
import { HoraConverter } from './hora.converter';
import { DataConverter } from './data.converter';
import { DataEntity } from './entity/data.entity';
import { HoraEntity } from './entity/hora.entity';

@Injectable()
export class AppService {

  constructor(
    private horaConverter: HoraConverter,
    private dataConverter: DataConverter
  ) {}

  async listarDias(): Promise<DataOutputDto[]> {
    const dataEntities = await DataEntity.find();
    const dataOutputs = dataEntities.map(entity => this.dataConverter.convert(entity));
    return Promise.resolve(dataOutputs);
  }

  async getData(idData: number): Promise<DataOutputDto | null> {
    const entity = await DataEntity.findOneBy({
      id: idData
    });

    if (!entity) {
      return Promise.resolve(null);
    }

    const output = this.dataConverter.convert(entity);
    return Promise.resolve(output);
  }

  async criarDia(dataInput: DataInputDto): Promise<DataOutputDto> {
    const entity = this.dataConverter.convert(dataInput);
    const savedEntity = await DataEntity.save(entity);
    const output = this.dataConverter.convert(savedEntity);
    
    return Promise.resolve(output);
  }

  async deletarDia(idData: number): Promise<void> {
    await DataEntity.delete(idData);
    return Promise.resolve();
  }

  async baterPonto(idData: number, hora: HoraInputDto): Promise<HoraOutputDto> {
    const horaEntity = this.horaConverter.convert(hora);
    const horaSavedEntity = await HoraEntity.save(horaEntity);
    const dataEntity = await DataEntity.findOneBy({ id: idData });

    if (dataEntity) {
      if (!dataEntity.pontos) {
        dataEntity.pontos = [];
      }

      dataEntity.pontos.push(horaSavedEntity);
      await DataEntity.save(dataEntity);
    }

    const horaOutput = this.horaConverter.convert(horaSavedEntity);
    return Promise.resolve(horaOutput);
  }

  async deletarPonto(idHora: number): Promise<void> {
    await HoraEntity.delete(idHora);
    return Promise.resolve();
  }

}
