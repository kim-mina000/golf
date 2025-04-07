import React from 'react';
import styled from 'styled-components';

const MenuWrap = styled.div`
    width: 100%;
    text-align: center;
    line-height: 3;
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;


const Circle = styled.div`
    width: 900px;
    height: 900px;
    border-radius: 50%;
    top: -350px;
    left: -100px;
    background-color: #1c2716;
    position: absolute;
    z-index: 3; 
    `;

const Container = styled.div`
    z-index: 4;
    width: 100%;
    height: 400px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

const TitleWrap = styled.div`
    h4 {
        color: white;
        font-size: 1.3rem;
    
    }    
`;


const ImgWrap = styled.div`
    width: auto;
    height: auto;
    z-index: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin-top: 10px;

    img {
        width: 35px;
    }

    .kakao,.blog {
        width: 32px;
    }

    .blog {
        padding-left: 2px;
    }
`;

const MobileMenu = ({showMenu, navigateEvent}) => {




    return (
        <MenuWrap>
            <Circle />
            <Container>
                <TitleWrap>
                    <h4 onClick={()=>navigateEvent('centerInfo')}>센터소개</h4>
                    <h4 onClick={()=>navigateEvent('lesson')}>레슨프로그램</h4>
                    <h4 onClick={()=>navigateEvent('instructor')}>인스트럭터</h4>
                </TitleWrap>
                <ImgWrap>
                    <a href="#"><img className='kakao' src="img/kakao_white.png" alt="kakaotalk" /></a>
                    <a href="#"><img className='insta' src="img/instagram_white.png" alt="insta" /></a>
                    <a href="#"><img className='blog' src="img/blog_white.png" alt="blog" /></a>
                </ImgWrap>
            </Container>

        </MenuWrap>
    );
};

export default MobileMenu;