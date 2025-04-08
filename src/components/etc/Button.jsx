import React from 'react';
import styled from 'styled-components';

// icon
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const MyButton = styled.div`

    width: auto;
    height: 25px;

    border: 1px solid white;
    color: white;
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
        color: black;
        background-color: white;
    }

`;


function Button({text, location}) {
    const navigate = useNavigate();
    return (
        <MyButton onClick={()=>navigate(`/${location}`)}>
            <p>{text}</p><FaLongArrowAltRight />
        </MyButton>
    );
}

export default Button;