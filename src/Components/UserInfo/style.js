import styled from "styled-components";

export const DivInfosContainer = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 215px;
  padding: 10px;
  background-color: var(--cleanBlack);
  display: flex;
  margin: 30px 0;
  color: white;
  flex-flow: column;
  gap: 15px;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  .user--profile--img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--purple);
  }

  @media (min-width: 700px) {
    gap: 5px;
  }
`;

export const InfosBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  figure,
  img {
    width: 100px;
  }
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
    margin-top: 10px;
  }
  button {
    height: 25px;
    width: 25px;
    background-color: transparent;

    border-radius: 2px;
    border: none;
    cursor: pointer;

    svg {
      width: 13px;
      color: var(--purple);
      margin-top: 3px;
    }
    @media screen and (min-width: 700px) {
      background-color:var(--white);
      border-radius: 7px;
    }
  }

  @media (min-width: 700px) {
    width: 100%;
    h2 {
      font-size: 35px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

export const InfosContainer = styled.div`
  max-width: 100%;
  display: flex;
  gap: 10px;
  position: relative;
  div.img--description {
    display: flex;
    flex-direction: column;
    .description {
      margin-top: 10px;
    }
  }
  div.username--plataform {
    position: absolute;
    left: 80px;
    padding-left: 30px;
    top: 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
      display: flex;
      justify-content: space-between;
      width: 80%;
      top: 0;
    }
  }
  span {
    color: var(--purple);
  }

  @media (min-width: 700px) {
    width: 100%;
  }
`;
