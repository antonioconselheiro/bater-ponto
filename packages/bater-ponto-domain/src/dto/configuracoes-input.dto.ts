import { IsOptional, IsString } from 'class-validator';

export class ConfiguracoesInputDto {
  /**
   * Configuração que indica quando pode ter a mudança para
   * o modo noturno, podendo assim se pressupor que terá um
   * recebimento adicional por aquelas horas
   */
  @IsString()
  @IsOptional()
  indicadorNoturno?: string;
}