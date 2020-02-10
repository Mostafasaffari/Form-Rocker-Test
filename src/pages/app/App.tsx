import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { IErrorValidate } from "../../interfaces/IErrorsValidate";

import { socialSecurityNumberPattern } from "../../helpers/regexPatterns";

import { AppState } from "../../redux/store";

import BoxWrapper from "../../components/box";
import { Input } from "../../components/ui-kit/input";
import { message } from "../../components/ui-kit/message";

import AppWrapper from "./app.style";
import { Button } from "antd";

const App: React.FC = () => {
  const [errors, setErrors] = useState<IErrorValidate>();
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [country, setCountry] = useState("");
  const { t } = useTranslation();
  const { theme } = useSelector((state: AppState) => {
    return { theme: state.AppSetting.theme };
  });

  const handleChangeSocialSecurityNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.match(socialSecurityNumberPattern);
    if (input && input.length) {
      setSocialSecurityNumber(input[0]);
      const newError: IErrorValidate = { ...errors };
      for (const item in newError) {
        if (item === "socialSecurityNumber") {
          delete newError[item];
        }
      }
      setErrors(newError);
    } else {
      setSocialSecurityNumber("");
      setErrors({
        ...errors,
        socialSecurityNumber: t("socialSecurityNumberInValidateMessage")
      });
    }
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
    } else {
      message.error(`p 
      c
      d
      f
      g
      `);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <BoxWrapper className="boxwrapper">
          <label htmlFor="Social security number" />
          <form onSubmit={handleSubmitForm}>
            <Input
              placeholder={t("socialSecurityNumber")}
              onChange={handleChangeSocialSecurityNumber}
              required
              pattern={new RegExp(socialSecurityNumberPattern).source}
              maxLength={13}
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
