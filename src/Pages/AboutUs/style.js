import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--purple);
    font-family: var(--blackOpsFont);
    font-weight: 500;
    font-size: 30px;
    margin: 50px auto;
  }

  .list-developers {
    width: 90%;
    max-width:900px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .developer-card {
    height: 350px;
    width: 15%;
    min-width: 260px;
    border-radius: 8px;
    border: 2px solid var(--purple);
    background: var(--blackComment);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0px 0px 8px var(--purple));
    padding: 10px;
    transition: 0.3s;
  }

  .developer-card:hover {
    filter: drop-shadow(0px 0px 0px var(--purple));
    min-width: 275px;
    height: 365px;
  }

  .developer-img {
    border: 2px solid var(--purple);
    border-radius: 50%;
    height: 170px;
    width: 70%;
    object-fit: cover;
  }

  h2 {
    width: 95%;
    border-bottom: 2px solid var(--purple);
    margin: 0px 10px;
    color: var(--white);
    font-size: 20px;
  }
  span {
    color: white;
    font-size: 16px;
  }

  .links-holder {
    width: 60%;
  }

  a {
    margin: 0px 10px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
    color: var(--purple);
  }

  a:hover {
    color: var(--white);
  }
`;
