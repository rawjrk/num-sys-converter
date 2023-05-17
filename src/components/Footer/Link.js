import styled from "styled-components";

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: var(--active-link);
    text-decoration: underline;
  }
`;

export default Link;
