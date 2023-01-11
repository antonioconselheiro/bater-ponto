import { ConfiguracoesInputDto } from './configuracoes-input.dto';
import { IOutput } from './output.interface';

export class ConfiguracoesOutputDto extends ConfiguracoesInputDto implements IOutput {
  constructor(
    public id: number
  ) {
    super();
  }
}