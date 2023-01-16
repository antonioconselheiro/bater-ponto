import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { ConfiguracoesOutputDto } from './configuracoes-output.dto';
import { IOutput } from './output.interface';
import { TrabalhoInputDto } from './trabalho-input.dto';
import { Type } from 'class-transformer';

export class TrabalhoOutputDto extends TrabalhoInputDto implements IOutput {

  constructor(
    id: number
  ) {
    super();
    this.id = id;
  }

  @IsNumber()
  id: number;

  @ValidateNested()
  @IsOptional()
  @Type(() => ConfiguracoesOutputDto)
  override configuracoes?: ConfiguracoesOutputDto;
}