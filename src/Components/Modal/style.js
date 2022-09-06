import styled from "styled-components";

export const Modal = styled.div`

    display: flex;
    flex-direction: column;
    background-color: var(--cleanBlack);
    padding: 15px;
    width: 95%;
    height: 231px;
    max-width: 500px;
    margin: 50px auto;
    border-radius: 5px;

    .user{
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
    }

    h2 {
        margin: 20px 0 15px 0;
        color: var(--white);
        padding-bottom: 30px;
        border-bottom: 2px solid var(--purple);
    }

    p {
        font-size:14px;
        margin: 15px;
        color: var(--white);
    }

    span {
        display: inline-block;
        color: var(--purple);
    }

    a {
        text-decoration: none;
        color: var(--purple);
        text-transform: uppercase;
    }

    @media screen and (min-width:489px){
        p{
            font-size:16px;
        }
    }

    @media screen and (min-width:768px){
        p{
            font-size:18px;
        }
    }

`