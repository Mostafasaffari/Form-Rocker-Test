import {
  IFormState,
  FormActionTypes,
  CHANGE_VALUE_FIELD,
  CLEAR_FORM_VALUES
} from "./types";
import storage from "../../helpers/storage";

const storageFormData = storage.get("forms");
const storageFormDataObject =
  (storageFormData && JSON.parse(storageFormData)) || {};

const initialState: IFormState = {
  country: storageFormDataObject.country || "",
  emailAddress: storageFormDataObject.emailAddress || "",
  phoneNumber: storageFormDataObject.phoneNumber || "",
  socialSecurityNumber: storageFormDataObject.socialSecurityNumber || ""
};

const userReducer = (
  state = initialState,
  action: FormActionTypes
): IFormState => {
  switch (action.type) {
    case CHANGE_VALUE_FIELD:
      storage.set(
        "forms",
        JSON.stringify({
          ...storageFormDataObject,
          [`${action.fieldName}`]: action.value
        })
      );
      return {
        ...state,
        [`${action.fieldName}`]: action.value
      };
    case CLEAR_FORM_VALUES:
      storage.clear("forms");
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default userReducer;
