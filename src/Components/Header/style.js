import styled from "styled-components";

export const Desktop = styled.header`
  margin-top: 25px;
  width: 95%;
  max-width: 1166px;
  height: 84px;
  border-radius: 5px;
  display: flex;
  padding-right: 20px;
  align-items: center;
  background-color: var(--cleanBlack);
  margin-inline: auto;
  justify-content: space-between;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 4px;
      a{
        font-size: 10px;
        &:hover{
          color: var(--purple)
        }
      }
    }
    .user--img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .infos {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .logged-infos {
      display: flex;
      align-items: center;
      gap: 10px;
      h3 {
        font-size: 18px;
        color: var(--white);
      }
      .icon {
        cursor: pointer;
        color: var(--white);
      }
    }
    .modal--user {
      position: absolute;
      z-index:9000;
      display: flex;
      flex-direction: column;
      right: -20px;
      top: 60px;
      width: 200px;
      background-color: var(--cleanBlack);
      padding-top: 8px;
      padding-bottom: 12px;
      gap: 12px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      div {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        height: 30px;
        background-color: var(--purple);
        color: var(--white);
        filter: brightness(0.9);
        &:hover {
          filter: brightness(1.1);
        }
        a {
          color: var(--white);
        }
      }
    }
    @media screen and (min-width: 810px) {
      nav{
        a{
          font-size: 12px;
        }
      }
    }
    @media screen and (min-width: 900px) {
      nav{
        a{
          font-size: 14px;
        }
      }
    }
  }
`;

export const Mobile = styled.header`
  margin-top: 25px;
  width: 95%;
  height: 84px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--cleanBlack);
  margin-inline: auto;
  div.infos {
    display: flex;
    align-items: center;
    gap: 12px;
    .hamburger {
      color: var(--white);
    }
  }
  .user--img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
  }
  .mobile--modal {
    position: fixed;
    inset: 0 0 0 50%;
    padding: min(30vh, 10rem) 10px;
    background-color: hsl(0 0% 0% / 0.5);
    backdrop-filter: blur(1rem);
    z-index: 9999;
    nav {
        .infos--mobile {
        position: absolute;
        top: 80px;
        display: flex;
        gap: 15px;
        align-items: center;
        color: var(--white);
      }
      h3 {
        font-size: 12px;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: left;
        text-align: left;
        gap: 15px;
        li {
          display: flex;
          align-items: center;
          gap: 12px;
          .nav--icon {
            color: var(--purple);
          }
          button{
              border: 0;
              background-color: transparent;
              color: var(--white);
              font-family: var(--mainFont);
              font-size: 20px;
              text-decoration: underline;
          }
          a {
            color: var(--white);
            font-family: var(--mainFont);
            font-size: 20px;
          }
        }
      }
      button.close--btn{
        position: absolute;
        z-index: 9999;
        width: 50vw;
        height:50px;
        left: 0;
        margin-right: 50px;
        margin-top: 30px;
        border: 0;
        background-color: var(--purple);
        padding-top: 5px;
        .close--icon {
          color: var(--white);
        }
      }
    }
  }
  @media screen and (min-width: 566px) {
    .mobile--modal {
      padding: min(30vh, 10rem) 0 min(30vh, 10rem) 50px;
    }
  }
  @media screen and (min-width: 410px) {
    .mobile--modal {
      nav {
        h3 {
          font-size: 16px;
        }
      }
    }
  }
`;

export const DefaultNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    min-width: 250px;
    margin-left: 5px;
    li {
      a {
        color: var(--white);
        text-decoration: none;
        font-family: var(--mainFont);
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
  @media screen and (min-width: 950px) {
    ul {
      gap: 40px;
      margin-left: 30px;
      li {
        a {
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    ul {
      gap: 45px;
    }
  }
`;

export const LoggedNav = styled.nav`
  width: fit-content;
  ul {
    display: flex;
    gap: 30px;
    margin-left: 10px;
    margin-right: 10px;
    li {
      a {
        color: var(--white);
        text-decoration: none;
        font-family: var(--mainFont);
        font-weight: 700;
        font-size: 12px;
      }
    }
  }
  @media screen and (min-width: 950px) {
    ul {
      gap: 40px;
      margin-left: 30px;
      li {
        a {
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) {
    ul {
      margin-left: 100px;
      gap: 45px;
    }
  }
`;
