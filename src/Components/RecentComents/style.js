import styled from "styled-components";

export const DivRecentContainer = styled.div`
  margin-top:30px;
  margin-bottom:30px;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: 300px;
  gap: 20px;
  h3{
    font-size: 20px;
  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media screen and (min-width: 1200px) {
    margin: 30px 0 0 0;
  }
`;
