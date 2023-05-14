import styled from "styled-components";

const Input = styled.input`
  font-size: inherit;
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  color: #333;

  :disabled {
    background-color: #eee;
  }
`;

export default Input;
