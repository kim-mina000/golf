import React from 'react';
import styled from 'styled-components';
import { HiArrowUp } from "react-icons/hi2";

const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f1f1f1;
    position: absolute;
    right: 15px;
    bottom: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHiArrowUp = styled(HiArrowUp)`
    font-size: 32px;
    font-weight: 100;
    opacity: 0.3;
    cursor: pointer;
`;

function scroll_up() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

const ScrollUpButton = () => {
    return (
        <Circle>
            <StyledHiArrowUp onClick={()=>scroll_up()} />
        </Circle>
    );
};

export default ScrollUpButton;