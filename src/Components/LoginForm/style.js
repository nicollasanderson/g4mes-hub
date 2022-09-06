import styled from "styled-components";

export const Background = styled.div`
  background: url("https://i.imgur.com/5FboDfi.png");
  filter: blur(6px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const FormDivContainer = styled.div`
  background-color: var(--cleanBlack);
  box-shadow: -4px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 75%;
  min-width: 280px;
  max-width: 400px;
  margin: 46px auto;
  color: var(--white);
  padding: 10px;
  height: 500px;

  h1 {
    font-size: 40px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--purple);
  }

  form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  span {
    display: inline-block;
    margin: 15px;
    margin-top: 15px;
    a {
      margin: 0 5px;
      text-decoration: none;
      text-transform: uppercase;
      color: var(--purple);
    }
  }
  @media screen and (min-width: 768px) {
    height: 600px;
    max-width: 450px;
    span {
      margin-top: 60px;
    }
  }
`;
