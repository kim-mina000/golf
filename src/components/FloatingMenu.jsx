import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 70px;
    height: 230px;
    background-color: #3A502F;

    position: fixed;
    right: 0;
    top: 30%;
    translate: calc(-50%);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    z-index: 99;

    img {
        width: 50px;
    }

    a:nth-child(2) {
        width: 75%;
    }
`;

const Line = styled.div`
    width: 50px;
    height: 1px;
    background-color: white;
`;


const FloatingMenu = () => {
    return (
        <Container>
            <a href="#"><img src="img/kakao_white.png" alt="kakao" /></a>
            <Line />
            <a href="#"><img src="img/calander_icon.png" alt="calander" /></a>
            <Line />
            <a href="#"><img src="img/instagram_white2.png" alt="insta" /></a>
        </Container>
    );
};

export default FloatingMenu;