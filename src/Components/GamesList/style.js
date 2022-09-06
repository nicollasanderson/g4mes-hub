import styled from "styled-components";

export const GamesListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 75%;
  li{
    width: 300px;
    margin-top: 50px;
    margin-inline: 10px;
  }
`;


export const Container = styled.div`
  margin-inline:auto;
  width: 310px;
  display: flex;
  justify-content: space-between;
  button.btn--games{
    &:hover{
      border: 0;
    }
      margin: 50px 0;
      width: 150px;
  }

  @media screen and (min-width:800px){
    width: 500px;
    button.btn--games{
      width: 200px;
  }
  }
`
