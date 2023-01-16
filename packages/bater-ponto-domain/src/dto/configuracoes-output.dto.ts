import { IsNumber } from 'class-validator';
import { ConfiguracoesInputDto } from './configuracoes-input.dto';
import { IOutput } from './output.interface';

export class ConfiguracoesOutputDto extends ConfiguracoesInputDto implements IOutput {

  constructor(
    id: number
  ) {
    super();
    this.id = id;
  }

  @IsNumber()
  id: number;
}