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
    margin-top: 130px;
    position: relative;
    text-align: center;
    
    img {
        width: 35%;
        height: 35%;
        position: relative;
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

const Box = styled.div `
    /* width: 50px; */
    display: inline;
    text-align: start;
    font-size: 1.7rem;

    position: absolute;
`;

const TopLeft = styled(Box)`
    top: 30px;
    left: 30px;
`;

const TopRight = styled(Box)`
    top: 30px;
    right: 30px;
`;

const BottomLeft = styled(Box)`
    bottom: 30px;
    left: 30px;
`;

const BottomRight = styled(Box)`
    bottom: 30px;
    right: 30px;
`;


const AdultGroupLessons = () => {
    return (
<>
            <TitleDiv>
                <h2>Adult<br/>Premium<br/>Group<br/>Lessons</h2>
            </TitleDiv>
            <ImageDiv><img src="img/adult_group_lessons_timg.jpg" alt="kid lesson program photo" /></ImageDiv>
            <ContentDiv>
                <h2>성인 프라이빗 그룹레슨</h2>
                <h4>커리큘럼에 맞춰 진행되는 단체 골프 레슨</h4>
                <p>1:2 ~ 1:4 단체레슨으로 매주 짜여진 커리큘럼에 맞춰 진행되는 프로그램으로<br />이론교육을 통해 골프의 전반적 이해를 도와드립니다.</p>
            </ContentDiv>
            <DetailDiv>
                <img src="img/adult_group_lessons_img.jpg" alt="adult_group_lessons_img" />
                <ul>
                    <TopLeft><Circle/>멤버스골프아카데미만의<br />과학적이고 체계적인 커리큘럼</TopLeft>
                    <BottomLeft><Circle/>퍼포먼스 향상을 위한<br />멤버스골프아카데미만의 연습드릴</BottomLeft>
                    <TopRight><Circle/>골프과학의 이론적이해</TopRight>
                    <BottomRight><Circle/>그룹레슨을 통한 커뮤니티 활성</BottomRight>
                </ul>
            </DetailDiv>
            
        </>
    );
};

export default AdultGroupLessons;