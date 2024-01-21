import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    width: 342px;
    height: 68px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    border: none;
    margin: 30px 0;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`