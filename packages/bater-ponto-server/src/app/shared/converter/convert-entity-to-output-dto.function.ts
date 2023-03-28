import { IOutput } from '@bater-ponto/bater-ponto-domain';
import { BaseEntity } from 'typeorm';

export function convertEntityToOutputDto(entity: BaseEntity & { id: number }): IOutput {
  if (entity.hasId()) {
    return { id: entity.id };
  } else {
    throw new Error('error trying to convert entity to IOutput without an id, class name: ' + entity.constructor.name);
  }

}
