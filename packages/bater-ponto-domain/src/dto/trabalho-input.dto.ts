import { DataOutputDto } from "./data-output.dto";
import { IOutput } from "./output.interface";

export class TrabalhoInputDto {
    dias: DataOutputDto[] = [];

    configuracoes?: IOutput;
}
