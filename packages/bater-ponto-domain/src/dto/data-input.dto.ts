import { IsString } from "class-validator";

export class DataInputDto {
  constructor(
    dia: string
  ) {
    this.dia = dia; 
  }

  @IsString()
  dia: string;
}