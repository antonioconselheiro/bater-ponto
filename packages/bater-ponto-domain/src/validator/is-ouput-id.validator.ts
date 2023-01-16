import { ValidationOptions, registerDecorator } from 'class-validator';

export function IsOutputId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsOutputId',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validate(value: any) {
          return value instanceof Object &&
            'id' in value &&
            typeof value.id === 'number';
        }
      }
    });
  };
}