import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 2rem 0;
  width: 100vw;
  color: ${(props) => props.theme.colors.font.secondary};
  font-size: 0.9rem;
  text-align: center;
`;

export default Footer;
