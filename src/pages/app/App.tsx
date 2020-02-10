import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { IErrorValidate } from "../../interfaces/IErrorsValidate";

import { socialSecurityNumberPattern } from "../../helpers/regexPatterns";

import { AppState } from "../../redux/store";
import formActions from "../../redux/form/actions";

import BoxWrapper from "../../components/box";
import { Input } from "../../components/ui-kit/input";
import { message } from "../../components/ui-kit/message";

import AppWrapper from "./app.style";
import { Button } from "antd";
import { validateInput } from "../../helpers/validateInput";

const App: React.FC = () => {
  const { theme, formData } = useSelector((state: AppState) => {
    return { theme: state.AppSetting.theme, formData: state.Form };
  });
  const [errors, setErrors] = useState<IErrorValidate>();
  const [socialSecurityNumber, setSocialSecurityNumber] = useState(
    formData.socialSecurityNumber
  );
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber);
  const [emailAddress, setEmailAddress] = useState(formData.emailAddress);
  const [country, setCountry] = useState(formData.country);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangeSocialSecurityNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = validateInput(
      event.target.value,
      "socialSecurityNumber",
      errors,
      socialSecurityNumberPattern,
      t("socialSecurityNumberInValidateMessage")
    );
    if (input.validate) {
      setSocialSecurityNumber(input.value);
      dispatch(
        formActions.changeFieldValue("socialSecurityNumber", input.value)
      );
    }
    setErrors(input.errors);
  };
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      socialSecurityNumber &&
      phoneNumber &&
      emailAddress &&
      country &&
      (!errors || Object.keys(errors).length === 0)
    ) {
      console.log("Success");
    } else {
      for (const index in errors) {
        message.error(errors[index]);
      }
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <BoxWrapper className="boxwrapper">
          <form onSubmit={handleSubmitForm}>
            <label className="labelform">{t("socialSecurityNumber")}</label>
            <Input
              placeholder={t("socialSecurityNumber")}
              onChange={handleChangeSocialSecurityNumber}
              required
              pattern={new RegExp(socialSecurityNumberPattern).source}
              maxLength={13}
              defaultValue={socialSecurityNumber}
            />
            {errors && errors.socialSecurityNumber && (
              <span className="errorvalidate">
                {errors.socialSecurityNumber}
              </span>
            )}

            <Button htmlType="submit">Submit</Button>
          </form>
        </BoxWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
