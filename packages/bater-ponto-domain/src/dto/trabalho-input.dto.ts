import { IsOptional, ValidateNested } from 'class-validator';
import { DataOutputDto } from "./data-output.dto";
import { IOutput } from "./output.interface";
import { IsOutputId } from "../validator/is-ouput-id.validator";
import { Type } from 'class-transformer';

export class TrabalhoInputDto {
  @ValidateNested()
  @Type(() => DataOutputDto)
  dias: DataOutputDto[] = [];

  @IsOutputId()
  @IsOptional()
  configuracoes?: IOutput;
}
