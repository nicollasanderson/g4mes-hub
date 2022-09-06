import styled from "styled-components";

export const DivContainer = styled.div`
  width: 90%;
  max-width: 670px;
  height: 550px;
  color: white;
  margin: auto;

  svg {
    color: var(--purple);
    width: 100px;
    height: 80px;
  }
  h1 {
    margin: 20px 0;
  }
  h3 {
    margin-top: 100px;
    font-size: 30px;
  }
  .react-multi-carousel-list{
    max-width:670px;
  }
  .react-multi-carousel-track {
    border-radius: 8px;
  }

  .Liked-game-card {
    filter: drop-shadow(0px 0px 0px var(--purple)) !important;
    margin-right: 10px;
    width: 250px !important;
  }
`;

export const GamesListContainer = styled.div`
  display: flex;
`;

export const carouselItem = styled.div`
  padding: 10px;
`;
