import styled from "styled-components";

export const Background = styled.div`
  background: url("https://i.imgur.com/5FboDfi.png");
  filter: blur(6px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 99.4vw;
  height: 105vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const FormDivContainer = styled.div`
  width: 75%;
  min-width: 280px;
  max-width: 450px;
  background-color: var(--cleanBlack);
  box-shadow: -4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 46px;
  margin-inline: auto;
  color: var(--white);
  padding: 10px;

  h1 {
    font-size: 40px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--purple);
  }
`;
