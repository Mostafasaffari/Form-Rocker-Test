import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .boxwrapper {
    min-width: 600px;
    form {
      display: flex;
      flex-direction: column;

      .labelform {
        color: ${props => props.theme.colors.font.main};
        margin-bottom: ${props => props.theme.sizes.spacing.s10};
        margin-top: ${props => props.theme.sizes.spacing.s5};
      }
      .errorvalidate {
        color: ${props => props.theme.colors.font.danger};
        margin-top: ${props => props.theme.sizes.spacing.s10};
      }
      button {
        background: ${props => props.theme.colors.button.gradientBackgroud};
        border-radius: ${props => props.theme.borderRadius.button};
        font-size: ${props => props.theme.sizes.font.l5};
        margin-top: ${props => props.theme.sizes.spacing.l5};
        font-weight: bold;
        width: 100%;
        height: 48px;
        color: #fff;
      }
    }
  }
`;

export default AppWrapper;
