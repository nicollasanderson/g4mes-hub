import styled from "styled-components";

export const DivProfileContainer = styled.div`
  margin: 0 auto;
  display: flex;
  color: white;
  flex-flow: column;

  @media (min-width: 1200px) {
    width: 95%;
    max-width: 1166px;
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const ContentWraper = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 700px;

  @media screen and (min-width: 1200px) {
    margin: 0;
    max-width: 700px;
  }
`;
