import { IErrorValidate } from "../interfaces/IErrorsValidate";

interface validateResponse {
  validate: boolean;
  errors: IErrorValidate;
  value: string;
}
export const validateInput = (
  value: string,
  fieldName: string,
  errors: IErrorValidate = {},
  pattern: RegExp,
  invalideMessage: string
): validateResponse => {
  const input = value.match(pattern);
  if (input && input.length) {
    const newError: IErrorValidate = { ...errors };
    for (const item in newError) {
      if (item === fieldName) {
        delete newError[item];
      }
    }
    return {
      validate: true,
      errors: newError,
      value: input[0]
    };
  }
  return {
    validate: false,
    errors: {
      ...errors,
      [fieldName]: invalideMessage
    },
    value: ""
  };
};
