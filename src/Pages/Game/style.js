import styled from "styled-components";

export const FancyMain = styled.main`
  .img-user {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .comments--container{
    margin-top: 50px;
  }
  .form--comment {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
    max-width: 800px;
    min-width: 300px;
    padding-left: 5px;
    padding-right: 5px;
    margin-inline: auto;
    min-height: 170px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 5px;
    background-color: var(--blackComment);
    .basic--infos {
      display: flex;
      gap: 10px;
      h3 {
        font-size: 18px;
        color: var(--white);
        margin-top: 5px;
      }
    }
    .send--control {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      padding-top: 5px;
      justify-content: space-between;
      textarea {
        height: 100%;
        width: 65%;
        background-color: transparent;
        resize: none;
        border: 1px solid var(--purple);
        color: var(--purple);
        padding: 5px;
        &::placeholder {
          color: var(--purple);
        }
      }
      .button--send {
        &:hover {
          border: 0;
        }
        height: 50%;
        margin: 0;
        font-size: 11px;
        width: 30%;
        max-width: 200px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .form--comment {
      .send--control {
        width: 90%;
        margin-inline:auto;
        .button--send {
          font-size: 15px;
        }
      }
    }
  }
`;
