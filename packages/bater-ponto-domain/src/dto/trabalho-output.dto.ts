import { ConfiguracoesOutputDto } from './configuracoes-output.dto';
import { IOutput } from './output.interface';
import { TrabalhoInputDto } from './trabalho-input.dto';

export class TrabalhoOutputDto extends TrabalhoInputDto implements IOutput {

  constructor(
    public id: number
  ) {
    super();
  }

  override configuracoes?: ConfiguracoesOutputDto;
}