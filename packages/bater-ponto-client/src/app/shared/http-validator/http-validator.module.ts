import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpValidatorService } from './http-validator.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HttpValidatorService
  ]
})
export class HttpValidatorModule { }
