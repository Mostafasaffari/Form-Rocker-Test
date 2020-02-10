import styled from "styled-components";

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.sizes.spacing.xl6};
  background-color: ${props => props.theme.colors.background.box};
  border-radius: ${props => props.theme.borderRadius.box};
`;

export default BoxWrapper;
