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
export const ContainerItens = styled.div`
    width: auto;
    height: auto;
`
export const Label = styled.p`
    color: #EEEEEE;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    padding-left: 15px;
`

export const InputLabel = styled.input`
    width: 342px;
    height: 58px;
    border: none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    padding-left: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 30px;
    outline: none;
`