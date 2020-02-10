import { IFormActions, CHANGE_VALUE_FIELD, CLEAR_FORM_VALUES } from "./types";

const actions: IFormActions = {
  changeFieldValue: (fieldName, value) => ({
    type: CHANGE_VALUE_FIELD,
    fieldName,
    value
  }),
  clearFormValues: () => ({
    type: CLEAR_FORM_VALUES
  })
};

export default actions;
