import React from 'react';
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
`;

const ImageDiv = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 50px;
    
    background-color: #999;
    /* background-image: url('../../img/kids_program_timg.jpg'); */
`;

const ContentDiv = styled.div`
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: center;

    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    h4 {
        font-size: 1.5rem;
    }

`;

const DetailDiv = styled.div`
    margin-top: 80px;
    width: 100%;

    ul {
        width: 80%;
        display: flex;
        margin: auto;
        align-items: flex-end;
    }

    ul li {
        width: 25%;
        height: 250px;
        text-align: start;
        /* display: flex;
        align-items: flex-start;
        flex-direction: column; */
    }

    ul li>div {
        position: absolute;
        bottom: 0;
        line-height: 1.3;
        padding: 10px;
    }

    ul li span {
        font-weight: bold;
        font-size: 1.1rem;
    }

    ul li p {
        font-size: 0.9rem;
    }

    ul li::before{
        content: "";
        display: block;
        width: 1px;
        height: 200px;
        background-color: #1c2716;

        position: absolute;
        bottom: 0;
    }
`;

const DecoLine = styled.div`
    width: 100%;
    height: 80px;
    background-color: #1c2716;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1c2716;
    position: absolute;
    bottom: 0;
    left: -4px;
`;


const AdultPrivateLessons = () => {
    return (
        <>
            <TitleDiv>
                <h2>Adult<br/>Private<br />Lessons</h2>
            </TitleDiv>
            <ImageDiv><img src="img/adult_private_lessons_timg.jpg" alt="kid lesson program photo" /></ImageDiv>
            <ContentDiv>
                <h2>성인 프라이빗 레슨</h2>
                <h4>1:1 트랙맨 분석을 통한 개인 맞춤형 프로그램</h4>
                <p>성인을 대상으로 한 1:1 개인레슨으로 학습스타일을 고려하며, 트랙맨4를 활용하여 스윙과 구질분석,<br/>
                스코어 관리 프로그램 등 맞춤형 교육을 통해 단기간 가장 빠른 효과를 기대할 수 있는 프로그램</p>
            </ContentDiv>
            <DetailDiv>
                <DecoLine>
                    <img src="img/Trackman.png" alt="powered_by_trackman" />
                </DecoLine>
                <ul>
                    <li>
                        <div>
                            <span>PHYSICAL</span>
                            <p>최상의 퍼포먼스를 위한<br/>신체능력 개발</p>
                            <Circle/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>ANALYSIS</span>
                            <p>TRACKMAN를 통한<br/>과학적인 분석 및 솔루션 제공</p>
                            <Circle/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>SCORE MAKING</span>
                            <p>LOWER SCORE를 위한<br/>심리적, 기술적 매니지먼트</p>
                            <Circle/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>SWING</span>
                            <p>체격과 체력을 고려한<br/>맞춤형 스윙 메이킹킹</p>
                            <Circle/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>EQUIPMENT</span>
                            <p>효율적인 스윙과<br/>구질을 위한 클럽체크</p>
                            <Circle/>
                        </div>
                    </li>
                </ul>
            </DetailDiv>
        </>
    );
};

export default AdultPrivateLessons;