import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: var(--border);
  border-radius: 0.4rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default Form;
