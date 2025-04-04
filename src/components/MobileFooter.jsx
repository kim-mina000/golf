import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
        width: 100vw;
        height: 100px;

        margin: auto;

        font-size: 12px;
        border-top: 1px solid rgba(0,0,0,0.2);

        background-image: url('img/LOGO.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        position: relative;
        top: 0;

`;

const Overlay = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
`;

const InfoUl = styled.ul`
    width: 90%;
    margin: auto;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 25px;
    
    li {
        width: 100%;
        height: 20px;

        line-height: 150%;

        text-align: start;
    }

    li span {
        color: rgba(0,0,0,0.6);
    }
    
`;

const MobileFooter = () => {
    return (
        <Wrap>
            <Overlay>
            <InfoUl>
                <li>
                    <p>멤버스골프아카데미 | 서울 강남구 도곡로 218, 지하 1층</p>
                </li>
                <li>
                    <p>사업자등록번호 : 645-88-02313 | 대표 : 조성진, 김윤중</p>
                </li>
                <li>
                    <p>TEL:010-1234-1234</p>
                </li>
            </InfoUl>
            </Overlay>
        </Wrap>
    );
};

export default MobileFooter;