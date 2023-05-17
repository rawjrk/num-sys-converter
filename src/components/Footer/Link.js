import styled from "styled-components";

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.colors.link.active};
    text-decoration: underline;
  }
`;

export default Link;
