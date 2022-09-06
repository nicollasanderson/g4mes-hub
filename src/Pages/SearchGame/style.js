import styled from "styled-components";

export const Container = styled.div`
  div.home--bottom {
    margin-top: 50px;
    margin-bottom: 100px;
    h2.main--title {
      color: var(--white);
      font-family: var(--blackOpsFont);
      font-weight: 500;
      font-size: 35px;
      h4{
          color: var(--purple);
          font-weight: 500;
      }
    }
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cleanBlack);
  padding: 15px;
  justify-content: center;
  width: 95%;
  height: 250px;
  max-width: 500px;
  margin: 70px auto;
  border-radius: 5px;

  h2 {
    margin-bottom: 20px;
    color: var(--white);
    padding-bottom: 20px;
    border-bottom: 2px solid var(--purple);
  }
  p {
    font-size: 18px;
    color: var(--black);
    span {
      color: var(--purple);
      font-size: 15px;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 768px) {
    h2 {
        font-size: 25px;
    }
    p {
      font-size: 20px;
      span {
        font-size: 18px;
      }
    }
  }
`;
