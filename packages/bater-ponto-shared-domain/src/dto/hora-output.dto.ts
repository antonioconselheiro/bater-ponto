import { HoraInputDto } from "./hora-input.dto";
import { IOuput } from "./output.interface";

export class HoraOutputDto extends HoraInputDto implements IOuput {

  constructor(
    id: number,
    hora: string
  ) {
    super(hora);
    this.id = id;
  }

  id: number;
}