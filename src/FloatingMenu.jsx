import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100px;
    height: 250px;
    background-color: #3A502F;

    position: fixed;
    right: 0;
    top: 50%;
    translate: calc(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    z-index: 99;

    img {
        width: 70%;
    }

    a:nth-child(2) {
        width: 75%;
    }

`;


const FloatingMenu = () => {
    return (
        <Wrap>
            <a href="#"><img src="img/kakao_white.png" alt="kakao" /></a>
            <a href="#"><img src="img/blog-logo-white.png" alt="blog" /></a>
            <a href="#"><img src="img/instagram_white.png" alt="insta" /></a>
        </Wrap>
    );
};

export default FloatingMenu;