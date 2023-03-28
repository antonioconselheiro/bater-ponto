export interface IConverter<inputDto, entity, outputDto = inputDto, anotherEntity = entity> {
  convert(arg: inputDto): entity;
  convert(arg: anotherEntity): outputDto;
}