import styled from "styled-components";

export const ContainerCardGame = styled.div`
  height: 350px;
  width: 22.5%;
  min-width: 300px;
  border-radius: 8px;
  background: var(--blackComment);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  filter: drop-shadow(0px 0px 8px var(--purple));
  border-radius: 5px;

  img {
    border-radius: 5px 5px 0px 0px;
    height: 170px;
    width: 100%;
    object-fit: cover;
    border-bottom: 2px solid var(--purple);
  }

  h2 {
    margin: 0px 10px;
    color: var(--white);
    font-size: ${(props) => (props.nameStyle === "min" ? "15px" : "20px")};
    text-align: left;
  }
  p {
    color: var(--white);
    margin: 0 10px;
    max-width: 100%;
    text-align: left;
    font-size: 12px;
    span {
      color: var(--grey);
    }
  }
  .view--more {
    width: 100%;
    height: 40px;
    margin-inline: auto;
    font-family: var(--blackOpsFont);
    text-transform: uppercase;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: -1;
    color: var(--purple);
    border: 0;
    border-radius: 0px 0px 5px 5px;
    background-color: var(--cleanBlack);

    ::before {
      content: "";
      width: 0;
      height: 335%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: var(--purple);
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    :hover::before {
      width: 350px;
      height: 300px;
    }

    :hover {
      color: var(--white);
    }
  }
`;
