import { HoraInputDto } from "./hora-input.dto";
import { IOutput } from "./output.interface";

export class HoraOutputDto extends HoraInputDto implements IOutput {
  constructor(
    public id: number,
    hora: string
  ) { 
    super(hora);
  }
}