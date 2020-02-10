import styled from "styled-components";

const HeaderBoxWrapper = styled.div`
  .headerbox__row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    h1 {
      font-size: ${props => props.theme.sizes.font.xl2};
      font-weight: bold;
    }
    .headerbox__element {
      display: flex;
      align-items: center;
      button {
        margin: 0 5px;
      }
    }
  }
`;

export default HeaderBoxWrapper;
