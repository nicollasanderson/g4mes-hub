import styled from "styled-components";

export const Button = styled.button`

  padding: 0.8em 1.8em;
  width: 165px;
  margin: 15px;
  border: 2px solid var(--purple);
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: var(--purple);

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
    width: 105%;
  }

  :hover {
    color: var(--white);
  }

  @media screen and (min-width: 768px){
      width: 365.5px;
      :hover::before {
        width: 300px;
        height: 300px;
      }
  }

`;