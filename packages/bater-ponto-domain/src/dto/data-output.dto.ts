import { DataInputDto } from "./data-input.dto";
import { HoraOutputDto } from "./hora-output.dto";
import { IOutput } from "./output.interface";

export class DataOutputDto extends DataInputDto implements IOutput {
  constructor(
    public id: number,
    dia: string
  ) {
    super(dia)
  }

  pontos: HoraOutputDto[] = [];
}