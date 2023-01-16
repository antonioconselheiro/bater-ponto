import { IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DataInputDto } from './data-input.dto';
import { HoraOutputDto } from './hora-output.dto';
import { IOutput } from './output.interface';

export class DataOutputDto extends DataInputDto implements IOutput {
  constructor(
    id: number,
    dia: string
  ) {
    super(dia);
    this.id = id;
  }

  @IsNumber()
  id: number;

  @ValidateNested()
  @Type(() => HoraOutputDto)
  pontos: HoraOutputDto[] = [];
}