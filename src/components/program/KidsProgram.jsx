import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const TitleDiv = styled.div`
    width: 20%;
    height: 20%;
    position: absolute;
    top: 85px;
    left: 35px;
    background-color: #3a502f;

    text-align: end;
    font-size: 2rem;
    h2 {
        color: #fff;
        padding: 15px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    
    @media (max-width:599px) {
        width: 300px;
    }
`;

const ImageDiv = styled.div`
    width: 100%;
    max-height: 350px;
    margin-top: 50px;
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    @media (max-width:599px) {
        width: 300px;
    }

`;

const ContentDiv = styled.div`
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;

    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    h4 {
        font-size: 1.5rem;
    }

`;

const DetailDiv = styled.div`
    width: 60%;
    margin-top: 40px;
    margin: auto;
    padding-left: 5%;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    

    &>div {
        margin-top: 80px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 15px;
        text-align: start;
        position: relative;
    };

    h2 {
        font-size: 3rem;
        padding-bottom: 15px;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: bold;
    }

    p {
        white-space: nowrap;
    }
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    left: -20px;
    top: -10px;
`;


const KidsProgram = () => {

    const isMobile = MediaQuery();
    return (
        <>
            <TitleDiv>
                <h2>KIDS<br/>PROGRAM</h2>
            </TitleDiv>
            <ImageDiv><img src="img/kids_program_timg.jpg" alt="kid lesson program" /></ImageDiv>
            <ContentDiv>
                <h2>유아 프로그램</h2>
                <h4>4세~7세 유아를 대상으로 골프에 친숙해질 수 있는 경험을 제공합니다.</h4>
                <p>놀이와 운동학습을 결합한 프로그램으로, 자연스럽게 골프를 접할 수 있게끔 구성된<br/>
                멤버스 골프 아카데미만의 유아 전용 골프 교육입니다.</p>
            </ContentDiv>
            <DetailDiv>
                <div>
                    <Circle/>
                    <h2>01</h2>
                    <h4>진짜 골프를 즐겨요</h4>
                    <p>친구들과 함께 PAR3, 스크린골프, 정규 18홀</p>
                </div>
                <div>
                    <Circle/>
                    <h2>02</h2>
                    <h4>쑥쑥 자라요</h4>
                    <p>건강하고 튼튼하게 자라도록<br/>다양한 신체활동 프로그램을 함께해요.</p>
                </div>
                <div>
                    <Circle/>
                    <h2>03</h2>
                    <h4>엄마아빠와 함께</h4>
                    <p>학부모님과 함께 하는 행사가 열려요.<br/>아이와 부모님 모두에게 좋은 추억을 남기세요.</p>
                </div>
                <div>
                    <Circle/>
                    <h2>04</h2>
                    <h4>골프가 최고!</h4>
                    <p>다양한 수상제도를 진행합니다.<br/>아이들에게 경쟁이 아닌 동기부여와 흥미를 유발시켜요.</p>
                </div>
            </DetailDiv>
            
        </>
    );
};

export default KidsProgram;