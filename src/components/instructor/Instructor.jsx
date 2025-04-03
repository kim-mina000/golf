import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Wrap = styled.section`

    width: 100vw;
    margin: auto;
`;

const Container = styled.div`
width: 1200px;
height: auto;
margin: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


&>h4 {
    font-weight: bold;
    padding: 10px;
    font-size: 1.5rem;
    padding: 20px;
}
`;

const ImgDiv = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 80px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Line = styled.div`
    width: 200px;
    height: 1px;
    background-color: rgba(0,0,0,0.3);
`;

const Middle = styled.div`
    margin-top: 80px;
    border-top: 1px solid rgba(0,0,0,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.3);
    width: 100%;
    display: flex;
`;

const InfoBox = styled.div`
    width: 60%;
    height: 500px;
    
    /* 이름 포지션 */
    div:first-child {
        width: 100%;
        height: 20%;
        
        display: flex;
        
        position: relative;
        h2 {
            padding-left: 40px;
            padding-top: 20px;

            font-weight: bold;
            font-size: 2.5rem;
        }
        
        span {
            padding-left: 15px;
            padding-top: 45px;
        }
    }

    /* 약력 */
    div:nth-child(2){
        width: 100%;
        height: 80%;

        /* padding: 20px 40px; */

        border-top: 1px solid rgba(0,0,0,0.3);
        display: flex;
        white-space: pre-wrap;
        text-align: start;

        span {
            padding-left: 40px;
            padding-top: 20px;
            font-weight: bold;
        }

        p {
            padding-top: 20px;
            margin-left: 15px;
            line-height: 1.5;
        }
    }
    
`;
const ImgBox = styled.div`
    width: 40%;
    border-left: 1px solid rgba(0,0,0,0.3);
    position: relative;
    object-fit: cover;
    
    img {
        width: 100%;
        height: 100%;
        
    }
    span {
        position: absolute;
        padding: 10px;
        color: #555;

        top: 10px;
        left: 10px;
        
        font-size: 1.5rem;
    }
`;

const MoreBox = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 40px;

    h4 {
        font-weight: bold;
        padding: 10px 40px 0 40px;
    }
    ul {
        width: 100%;
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    ul li {
        width: 240px;
        height: 240px;
        padding : 10px;
        overflow: hidden;
    }

    ul li p {
        text-align: start;
        padding-bottom: 10px;
        font-weight: bold;

    }

    ul li img {
        width: 100%;
        cursor: pointer;
    }
`;



const Instructor = () => {

    // 숫자 자리수 맞추는 함수
    const padNumber = (number) => {
        return number.toString().padStart(2, "0");
    }

    // 강사정보
    const instructorInfo = [
        {
            index:1,
            name:"조은애",
            name_e:"EUNEA",
            position:"CEO",
            img:'img/profile (1).png',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },
        {
            index:2,
            name:"2",
            name_e:"2",
            position:"2",
            img:'https://picsum.photos/150/150',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },
        {
            index:3,
            name:"3",
            name_e:"3",
            position:"3",
            img:'https://picsum.photos/150/150',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },        {
            index:4,
            name:"4",
            name_e:"4",
            position:"4",
            img:'https://picsum.photos/150/150',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },        {
            index:5,
            name:"5",
            name_e:"5",
            position:"5",
            img:'https://picsum.photos/150/150',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },
        {
            index:6,
            name:"6",
            name_e:"6",
            position:"6",
            img:'https://picsum.photos/150/150',
            career : `Lorem ipsum dolor,
sit amet consectetur adipisicing elit.
Harum accusantium, delectus sapiente,
laborum eos magni maxime dolorum rem asperiores 
officia pariatur eligendi est ipsam eius inventore 
fuga voluptate? Eos, dolorum!`,
        },
    ]

    const [selectInstructor, setSelectInstructor] = useState(1);

    useEffect(()=>{
    },[])


    return (
        <Wrap>
            <ImgDiv>
                <img src="img/instructor_img.png" alt="instructor_img" />
            </ImgDiv>
            <Container>
                <Line />
                <h4>인스트럭터</h4>
                <Middle>
                    <InfoBox>
                        <div>
                            <h2>{instructorInfo.find(item => item.index === selectInstructor).name}</h2>
                            <span>{instructorInfo.find(item => item.index === selectInstructor).position}</span>
                        </div>
                        <div>
                            <span>약력</span>
                            <p>{instructorInfo.find(item => item.index === selectInstructor).career}</p>
                        </div>
                    </InfoBox>
                    <ImgBox>
                        <span>{instructorInfo.find(item => item.index === selectInstructor).name_e}</span>
                        <img src={instructorInfo.find(item => item.index === selectInstructor).img} alt="프로필이미지" />
                    </ImgBox>
                </Middle>
                <MoreBox>
                    <h4>MORE</h4>
                    <ul>{instructorInfo.map(
                        person => (
                        <li>
                            <p>{padNumber(person.index)}</p>
                            <img src={person.img} onClick={()=>{setSelectInstructor(person.index);
                            }}/>
                        </li>
                        )
                        )}
                    </ul>
                </MoreBox>
            </Container>
        </Wrap>
    );
};

export default Instructor;