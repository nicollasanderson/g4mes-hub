import styled from "styled-components";

export const Background = styled.div`
  background: url("https://www.gameinformer.com/sites/default/files/2021/01/04/ba3e0b40/d8xyxyxwwaa5lbv.jpg");
  filter: blur(6px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  opacity: 0.5;
  width: 99vw;
  height: 46vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Container = styled.div`
  div.home--bottom {
    margin-bottom: 100px;
    h2.main--title {
      color: var(--purple);
      font-family: var(--blackOpsFont);
      font-weight: 500;
      font-size: 36px;
    }
  }
`;
