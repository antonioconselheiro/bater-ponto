export class HoraInputDto {
  constructor(
    hora: string
  ) {
    this.hora = hora;
  }

  hora: string;
  descricao?: string;
}