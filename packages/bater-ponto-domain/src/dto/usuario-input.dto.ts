import { IsString } from "class-validator";

export class UsuarioInputDto {

	constructor(
		nome: string
	) {
		this.nome = nome;
	}

	@IsString()
	nome: string;
}