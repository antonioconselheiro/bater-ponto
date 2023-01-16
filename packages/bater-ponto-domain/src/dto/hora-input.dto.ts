import { IsOptional, IsString } from "class-validator";

export class HoraInputDto {
  constructor(
    hora: string
  ) {
    this.hora = hora;
  }

  @IsString()
  hora: string;

  @IsString()
  @IsOptional()
  descricao?: string;
}