import styled from "styled-components"


export const FancyForm = styled.form`
    width: 200px;
    div{
        width: 100%;
        max-width: 300px;
        height:35px;
        background-color: var(--black);
        border-radius: 5px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding-left: 10px;
            input{
                background-color: transparent;
                border: 0;
                height:100%;
                width: 88%;
                color: var(--purple);
                font-family: var(--mainFont);
                font-weight: 700;
                padding-left: 5px;
                &::placeholder{
                    opacity: 0.6;
                    font-size: 13px;
                    color: var(--purple)
                }
            }
            button{
                width: 28px;
                height: 28px;
                border: 0;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--white);
                .search-icon{
                    color: var(--purple);
                }
            }
    }

    @media screen and (min-width: 900px) {
        width: 250px;
    }
    @media screen and (min-width: 1100px) {
        width: 300px;
    }

`