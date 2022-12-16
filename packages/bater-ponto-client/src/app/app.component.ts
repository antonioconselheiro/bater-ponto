import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'bater-ponto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pontos: string[] = [];

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const uri = `${environment.server}pontos`;
    firstValueFrom(this.httpClient.get<string[]>(uri))
      .then(pontos => this.pontos = pontos)
      .catch(error => console.error(error));
  }

  onClickBaterPonto(): void {
    const ponto = new Date().toISOString();
    const uri = `${environment.server}pontos`;
    firstValueFrom(this.httpClient.post<string[]>(uri, { ponto }))
      .then(pontos => this.pontos = pontos)
      .catch(error => console.error(error));
  }

  onClickDeletePonto(index: number): void {
    const uri = `${environment.server}pontos/${index}`;
    firstValueFrom(this.httpClient.delete<string[]>(uri))
      .then(pontos => this.pontos = pontos)
      .catch(error => console.error(error));
  }
}
