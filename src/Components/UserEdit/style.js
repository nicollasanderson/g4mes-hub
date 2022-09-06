import styled from "styled-components";

export const FormDivContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 147vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;

  form {
    margin-top: 50px;
    width: 90%;
    background-color: var(--cleanBlack);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: white;
    padding: 20px 0;
  }

  input {
    padding-left: 10px;
    &::placeholder {
      font-size: 12px;
    }
  }

  @media (min-width: 700px) {
    input {
      &::placeholder {
        font-size: 14px;
      }
    }

    form {
      width: 500px;
    }
  }
`;
