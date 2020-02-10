import React from "react";

import { Divider } from "../ui-kit/divider";

import HeaderBoxWrapper from "./headerBox.style";

interface IProps {
  title: string;
  element?: React.ReactElement;
}
const HeaderBox: React.FC<IProps> = ({ title, element }) => {
  return (
    <HeaderBoxWrapper>
      <div className="headerbox__row">
        <h1>{title}</h1>
        <div className="headerbox__element">{element}</div>
      </div>
      <Divider />
    </HeaderBoxWrapper>
  );
};

export { HeaderBox };
