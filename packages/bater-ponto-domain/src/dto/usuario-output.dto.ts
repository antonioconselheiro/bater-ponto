import { IsNumber } from 'class-validator';
import { IOutput } from './output.interface';
import { UsuarioInputDto } from './usuario-input.dto';

export class UsuarioOutputDto extends UsuarioInputDto implements IOutput {
  constructor(
    id: number,
    nome: string
  ) {
    super(nome);
    this.id = id;
  }

  @IsNumber()
  id: number;
}