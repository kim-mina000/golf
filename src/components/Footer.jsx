import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
    width: 100vw;
    height: 300px;
    
    border-top: 1px solid rgba(0,0,0,0.1);
    `;

const Container = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;

    margin: auto;
`

const LogoDiv = styled.div`
    width: 50%;
    text-align: left;

    img {
        width: 200px;
        margin-left: 50px;
    }
`;

const InfoUl = styled.ul`
    width: 50%;
    height: 260px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 40px;

    li {
        width: 50%;
        height: 50px;
        margin-bottom: 30px;

        line-height: 150%;

        text-align: start;
    }

    li span {
        color: rgba(0,0,0,0.6);
    }
    
`;

const Footer = () => {
    return (
        <Wrap>
            <Container>
                <LogoDiv><img src="img/LOGO.png" alt="logo" /></LogoDiv>
                <InfoUl>
                    <li>
                        <span>회사명</span>
                        <p>멤버스골프아카데미</p>
                    </li>
                    <li>
                        <span>대표자명</span>
                        <p>조성진, 김윤중</p>
                    </li>
                    <li>
                        <span>주소</span>
                        <p>서울 강남구 도곡로 218, 지하 1층</p>
                    </li>
                    <li>
                        <span>연락처</span>
                        <p>010-1234-1234</p>
                    </li>
                    <li>
                        <span>사업자등록번호</span>
                        <p>645-88-02313</p>
                    </li>
                </InfoUl>
            </Container>
            
        </Wrap>
    );
};

export default Footer;