import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: #fff;
  font-size: 1rem;
  color: #333;

  :disabled {
    background-color: #eee;
  }
`;

export default Input;
