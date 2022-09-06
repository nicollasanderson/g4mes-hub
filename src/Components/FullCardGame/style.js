import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 1166px;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;
  border-radius: 5px;
  background-color: var(--cleanBlack);
  z-index: 1;
  overflow: hidden;

  .img-holder {
    position: relative;
    .game-image {
      border-radius: 5px 5px 0px 0px;
      height: 160px;
      width: 100%;
      object-fit: cover;
      @media screen and (min-width: 500px) {
        height: 200px;
      }
      @media screen and (min-width: 600px) {
        height: 250px;
      }
      @media screen and (min-width: 768px) {
        filter: blur(3px);
        filter: brightness(0.7);
        opacity: 0.2;
        height: 800px;
        border-radius: 5px;
        position: absolute;
        left: 0px;
        z-index: 2;
        object-fit: cover;
      }
    }
  }

  .info-holder {
    z-index: 3;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-items: flex-start;

    h3.game--name {
      color: var(--purple);
      margin: 5px 0 5px 5px;
      background-color: var(--grey);
      padding: 5px;
      border-radius: 3px;
    }
    button.like--button {
      margin: 5px 5px;
      svg{
        color: var(--purple);
        height: 30px;
        width: 30px;
      }
    }

    h3 {
      color: var(--purple);
      margin: 5px 0px;
    }

    div.single--info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      width: 100%;
      margin: 5px 0 5px 5px;
      h4 {
        font-size: 15px;
        color: var(--purple);
      }
      .infos--details {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--white);
        padding-right: 5px;
      }
      span {
        font-size: 12px;
        margin-left: 2px;
        color: var(--white);
      }
    }
    .game-description {
      padding: 5px;
      color: var(--white);
      font-size: 10px;
      text-align: left;
      margin-bottom: 10px;

      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    }
    @media screen and (min-width: 768px) {
      div.single--info {
        margin: 0 0 10px 25px;
        h4 {
          font-size: 18px;
        }
        span {
          font-size: 14px;
        }
      }
      h3.game--name {
        margin: 15px 0 5px 25px;
        font-size: 23px;
        color: var(--white);
        padding: 10px;
        background-color: var(--purple);
      }
      button.like--button {
      margin: 10px 0 10px 25px;
      svg{
        color: var(--purple);
        height: 40px;
        width: 40px;
      }
    }
      h3 {
        font-size: 16px;
      }
      .game-description {
        padding-left: 25px;
      }
    }
  }

  .arrow-buttom {
    align-self: center;
    color: var(--purple);
  }
`;

export const More = styled.div`
  background-color: var(--blackComment);
  padding: 10px;
  z-index: -10;
  border-radius: 0 0 5px 5px;
  width: 90%;
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  .container--more {
    width: 50%;
  }
  .grades {
    display: flex;
    padding-right: 15px;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid var(--purple);
    gap: 10px;
    .single--grade {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      .images--container {
        display: flex;
        flex-direction: column;
        .metacritic {
          height: 35px;
          width: 120px;
        }
      }
      .grade--box {
        width: 40px;
        height: 40px;
        background-color: transparent;
        box-shadow: 0px 0px 4px #a84def;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 1rem;
          color: var(--purple);
          font-family: var(--mainFont);
          -webkit-text-stroke: 0.2px var(--white);
        }
      }
    }
  }
  .user--grade {
    padding-left: 15px;
    padding-top: 30px;
    h3 {
      color: var(--white);
      span {
        color: var(--purple);
      }
    }
    .stars--container {
      margin-top: 30px;
      display: flex;
      gap: 5px;
      justify-content: center;
      .single--star {
        width: 25px;
        height: 25px;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  @media screen and (min-width: 768px) {
    height: 200px;
    .grades {
      justify-content: center;
      align-items: center;
      gap: 50px;
      .single--grade {
        width: 300px;
        flex-direction: row;
        justify-content: space-between;
        .games--hub {
          width: 150px;
        }
        .images--container {
          flex-direction: row;
          width: 150px;
          .metacritic {
            height: 50px;
          }
        }
        .grade--box {
          width: 50px;
          height: 50px;
          span {
            font-size: 1.3rem;
            -webkit-text-stroke: 0.2px var(--white);
          }
        }
      }
    }
    .user--grade {
      h3 {
        font-size: 23px;
        span {
          color: var(--purple);
        }
      }
      .stars--container {
        .single--star {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

export const ButtonNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
