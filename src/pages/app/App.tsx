import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { IErrorValidate } from "../../interfaces/IErrorsValidate";

import { ICountry } from "../../entities/country";

import { getAllCountriesApi } from "../../services/countryApi";

import storage from "../../helpers/storage";
import { validateInput } from "../../helpers/validateInput";
import {
  socialSecurityNumberPattern,
  phoneNumberPattern,
  emailAddressPattern
} from "../../helpers/regexPatterns";

import { AppState } from "../../redux/store";
import formActions from "../../redux/form/actions";

import BoxWrapper from "../../components/box";
import { Input } from "../../components/ui-kit/input";
import { Button } from "../../components/ui-kit/button";
import { message } from "../../components/ui-kit/message";
import { Select, Option } from "../../components/ui-kit/select";

import AppWrapper from "./app.style";

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
  const [countryList, setCountryList] = useState<ICountry[]>(
    storage.get("country") ? JSON.parse(storage.get("country")!) : []
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryList.length === 0) getCoutryList();
  }, []);
  const getCoutryList = async () => {
    try {
      const response = await getAllCountriesApi();
      setCountryList(response);
      storage.set("country", JSON.stringify(response));
    } catch (err) {
      message.error(err.message);
    }
  };

  const handleChangeCountry = (value: string) => {
    if (value) {
      setCountry(value);
      dispatch(formActions.changeFieldValue("country", value));
    } else {
      setErrors({ ...errors, country: t("countryInValidateMessage") });
    }
  };

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
    setSocialSecurityNumber(input.value);
    if (input.validate) {
      dispatch(
        formActions.changeFieldValue("socialSecurityNumber", input.value)
      );
    }
    setErrors(input.errors);
  };

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = validateInput(
      event.target.value,
      "phoneNumber",
      errors,
      phoneNumberPattern,
      t("phoneNumberInValidateMessage")
    );
    setPhoneNumber(input.value);
    if (input.validate) {
      dispatch(formActions.changeFieldValue("phoneNumber", input.value));
    }
    setErrors(input.errors);
  };

  const handleChangeEmailAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = validateInput(
      event.target.value,
      "emailAddress",
      errors,
      emailAddressPattern,
      t("emailAddressInValidateMessage")
    );
    setEmailAddress(input.value);
    if (input.validate) {
      dispatch(formActions.changeFieldValue("emailAddress", input.value));
    }
    setErrors(input.errors);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!socialSecurityNumber || !country || !emailAddress || !phoneNumber) {
      return message.error(t("inValidateFormMessage"));
    }
    if (!errors || Object.keys(errors).length === 0) {
      dispatch(formActions.clearFormValues());
      setSocialSecurityNumber("");
      setCountry("");
      setEmailAddress("");
      setPhoneNumber("");
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
              value={socialSecurityNumber}
            />
            {errors && errors.socialSecurityNumber && (
              <span className="errorvalidate">
                {errors.socialSecurityNumber}
              </span>
            )}

            <label className="labelform">{t("phoneNumber")}</label>
            <Input
              placeholder={t("phoneNumber")}
              onChange={handleChangePhoneNumber}
              required
              pattern={new RegExp(phoneNumberPattern).source}
              maxLength={16}
              defaultValue={phoneNumber}
              value={phoneNumber}
            />
            {errors && errors.phoneNumber && (
              <span className="errorvalidate">{errors.phoneNumber}</span>
            )}

            <label className="labelform">{t("emailAddress")}</label>
            <Input
              placeholder={t("emailAddress")}
              onChange={handleChangeEmailAddress}
              required
              pattern={new RegExp(emailAddressPattern).source}
              maxLength={150}
              defaultValue={emailAddress}
              value={emailAddress}
            />
            {errors && errors.emailAddress && (
              <span className="errorvalidate">{errors.emailAddress}</span>
            )}

            <label className="labelform">{t("country")}</label>
            <Select
              onChange={handleChangeCountry}
              placeholder={t("country")}
              value={country || undefined}
            >
              {countryList.map(item => (
                <Option key={item.name} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            {errors && errors.country && (
              <span className="errorvalidate">{errors.country}</span>
            )}
            <Button htmlType="submit">Submit</Button>
          </form>
        </BoxWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
