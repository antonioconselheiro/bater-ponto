import { IOutput } from './output.interface';
import { UsuarioInputDto } from './usuario-input.dto';

export class UsuarioOutputDto extends UsuarioInputDto implements IOutput {
  constructor(
    public id: number,
    nome: string
  ) {
    super(nome);
  }
}