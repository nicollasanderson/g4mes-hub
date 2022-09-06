import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  gap: 10px;
  width: 60%;
  max-width: 800px;
  min-width: 300px;
  margin-inline: auto;
  min-height: 136px;
  border-radius: 5px;
  padding-top: 15px;
  background-color: var(--blackComment);

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: -6px;
  }

  .game--name {
    font-size: 16px;
    color: var(--white);
    font-weight: bold;
    a {
      color: var(--white);
      text-decoration: none;
      &:hover {
        color: var(--purple);
      }
    }
  }

  .comment {
    font-size: 10px;
    color: var(--grey);
    text-align: start;
    margin-top: 5px;
    min-height: 85px;
  }

  .like-holder {
    align-self: end;
    color: var(--white);
    font-size: 16px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .like-icon {
    color: var(--purple);
    margin-top: 5px;
    margin-left: 10px;
  }
`;

export const Game = styled.div`
  display: flex;
  width: 60%;
  max-width: 800px;
  min-width: 300px;
  margin-inline: auto;
  min-height: 136px;
  border-radius: 5px;
  padding-top: 15px;
  background-color: var(--blackComment);

  .img-holder {
    width: 55px;
    height: 55px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 10px;
  }

  .img-user-comment {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: -6px;
  }

  .title-and-btn-rmv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button.button--delete {
    border: 0;
    color: var(--purple);
    background-color: transparent;
    margin-right: 5px;
    filter: brightness(0.8);
    &:hover{
      filter: brightness(1.2);
    }
  }

  .name {
    max-width: 95%;
    font-size: 16px;
    margin-top: 10px;
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--purple);
    }
    a {
      text-decoration: none;
    }
  }

  .comment {
    max-width: 95%;
    font-size: 10px;
    color: var(--grey);
    text-align: start;
    margin-top: 5px;
    min-height: 85px;
  }

  .like-holder {
    align-self: end;
    color: var(--white);
    font-size: 16px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .like-icon {
    color: var(--purple);
    margin-top: 5px;
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    .name {
      font-size: 18px;
    }
    .comment {
      font-size: 14px;
    }
  }
`;
