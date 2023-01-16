import { IsNumber, IsString } from "class-validator";
import { HoraInputDto } from "./hora-input.dto";
import { IOutput } from "./output.interface";

export class HoraOutputDto extends HoraInputDto implements IOutput {
  constructor(
    id: number,
    hora: string
  ) { 
    super(hora);
    this.id = id;
  }
  
  @IsNumber()
  id: number;
}
