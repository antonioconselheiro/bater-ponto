import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  pontos: string[] = [];

  marcarPonto(ponto: string): string[] {
    this.pontos.push(ponto);
    return this.pontos;
  }

  listarPonto(): string[] {
    return this.pontos;
  }

  deletarPonto(index: number): string[] {
    this.pontos.splice(index, 1);
    return this.pontos;
  }
}
