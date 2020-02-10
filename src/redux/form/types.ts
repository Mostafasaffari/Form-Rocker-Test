export const CHANGE_VALUE_FIELD = "CHANGE_VALUE_FORM";
export const CLEAR_FORM_VALUES = "CLEAR_FORM_VALUES";

export interface IFormState {
  socialSecurityNumber: string;
  phoneNumber: string;
  emailAddress: string;
  country: boolean;
}

type IChangeFieldValueAction = {
  type: typeof CHANGE_VALUE_FIELD;
  fieldName: keyof IFormState;
  value: string;
};

type IClearFormValuesAction = {
  type: typeof CLEAR_FORM_VALUES;
};

export interface IFormActions {
  changeFieldValue: (
    fieldName: keyof IFormState,
    value: string
  ) => IChangeFieldValueAction;
  clearFormValues: () => IClearFormValuesAction;
}

export type FormActionTypes = IChangeFieldValueAction | IClearFormValuesAction;
