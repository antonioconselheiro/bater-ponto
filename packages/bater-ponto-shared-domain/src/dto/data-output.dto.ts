import { DataInputDto } from "./data-input.dto";
import { HoraOutputDto } from "./hora-output.dto";
import { IOuput } from "./output.interface";

export class DataOutputDto extends DataInputDto implements IOuput {

  constructor(
    id: number,
    data: string
  ) {
    super(data);
    this.id = id;
  }

  id: number;
  pontos: HoraOutputDto[] = [];
}