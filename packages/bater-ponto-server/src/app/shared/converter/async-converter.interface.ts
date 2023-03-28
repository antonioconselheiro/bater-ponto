export interface IAsyncConverter<inputDto, entity, outputDto = inputDto, anotherEntity = entity> {
  convert(arg: inputDto): Promise<entity>;
  convert(arg: anotherEntity): Promise<outputDto>;
}