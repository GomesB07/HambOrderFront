import styled from "styled-components";

export const Container = styled.div`
    background-color:  #0A0A10;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Image = styled.img`
    width: 342px;
    height: 250px;
    margin-top: 30px;
`

export const Order = styled.li`
    width: 342px;
    height: 101px;
    border: none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    padding-left: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin: 15px 0;
    outline: none;
    list-style-type: none;
    display: flex;
    flex-direction: row;

    .div-order{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px 0;
        p{
            color: #FFFFFF;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
        }
        .p-client-name{
            font-weight: 700;
        }
    }
    .div-trash{
        width: 20%;
        height: 100%;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            background: transparent;
            border: none;
            cursor: pointer;
        }
    }
`