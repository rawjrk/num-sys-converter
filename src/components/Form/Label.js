import styled from "styled-components";

const Label = styled.label`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.font.primary};
  font-size: 1rem;

  :nth-of-type(1) {
    margin-top: 0;
  }
`;

export default Label;
