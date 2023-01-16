import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpValidatorService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  async get<V, T = V>(url: string, validationSchema: ClassConstructor<V>): Promise<T>;
  async get<V, T extends Array<V>>(url: string, validationSchema: ClassConstructor<V>): Promise<T>;
  async get<V, T>(url: string, validationSchema: ClassConstructor<V>): Promise<T | V> {
    const result = await firstValueFrom(this.httpClient.get<T>(url));
    const transformed = plainToInstance(validationSchema, result);

    return Promise.resolve(transformed);
  }

  async post<V, T = V>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T>;
  async post<V, T extends Array<V>>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T>;
  async post<V, T>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T | V> {
    const result = await firstValueFrom(this.httpClient.post<T>(url, body));
    const transformed = plainToInstance(validationSchema, result);

    return Promise.resolve(transformed);
  }

  async put<V, T = V>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T>;
  async put<V, T extends Array<V>>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T>;
  async put<V, T>(url: string, validationSchema: ClassConstructor<V>, body: unknown): Promise<T | V> {
    const result = await firstValueFrom(this.httpClient.put<T>(url, body));
    const transformed = plainToInstance(validationSchema, result);

    return Promise.resolve(transformed);
  }

  async delete(url: string): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(url));
  }

}
