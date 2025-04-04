import React from 'react';
import styled from 'styled-components';

// icon
import { FaLongArrowAltRight } from "react-icons/fa";

const MyButton = styled.div`

    width: auto;
    height: 25px;

    border: 1px solid black;
    color: black;
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;

    position: absolute;
    bottom: 20px;
    right: 20px;

    font-size: 12px;

    &:hover {
        color: white;
        background-color: black;
    }

`;


function ButtonBlack({ text, onClick}) {
    return (
        <MyButton onClick={() => onClick}>
            <p>{text}</p><FaLongArrowAltRight />
        </MyButton>
    );
}

export default ButtonBlack;