import { ShallowWrapper } from "enzyme";

export const findByTestAttr = (
  component: ShallowWrapper,
  attr: string
): ShallowWrapper => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
