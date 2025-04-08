import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
    width: 100vw;
    margin: auto;
`;

const Container = styled.div`
  width: 1200px;
  max-width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h4 {
    font-weight: bold;
    padding: 20px;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    & > h4 {
      font-size: 1.2rem;
      padding: 15px;
    }
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

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 40px;
  }
`;

const Line = styled.div`
    width: 200px;
    height: 1px;
    background-color: rgba(0,0,0,0.3);
`;

const Middle = styled.div`
  margin-top: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
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
    @media (max-width: 768px) {
        flex-direction: column;

        h2 {
            font-size: 1.5rem;
            padding-left: 20px;
            padding-top: 20px;
        }

        span {
            padding-left: 20px;
            padding-top: 5px;
            padding-bottom: 20px;
        }
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
    @media (max-width: 768px) {
      flex-direction: column;

      span {
        padding-left: 20px;
        padding-top: 10px;
      }

      p {
        padding: 10px 20px;
        margin: 0;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImgBox = styled.div`
    width: 40%;
    border-left: 1px solid rgba(0,0,0,0.3);
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    span {
        position: absolute;
        padding: 10px;
        color: #555;
        top: 10px;
        left: 10px;
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        border-left: none;
        border-top: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

const MoreBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
    justify-content: center;
  }

  ul li {
    width: 240px;
    height: 240px;
    padding: 10px;
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

  @media (max-width: 768px) {
    ul li {
      width: 45%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    ul li {
      width: 90%;
    }
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

    // 스크롤업함수
    const targetRef = useRef(null);
    function scrollToTop() {
      targetRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }


    return (
        <Wrap>
            <ImgDiv>
                <img src="img/instructor_img.png" alt="instructor_img" />
            </ImgDiv>
            <Container>
                <Line />
                <h4>인스트럭터</h4>
                <Middle ref={targetRef}>
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
                            <img alt="인스트럭터프로필사진" src={person.img} onClick={()=>{setSelectInstructor(person.index); scrollToTop();}}/>
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