export class DataInputDto {
  constructor(
    data: string
  ) {
    this.data = data;
  }

  data: string;
  descricao?: string;
}