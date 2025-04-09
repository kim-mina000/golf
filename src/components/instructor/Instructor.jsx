import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { fetchInstructors, fetchInstructorById } from "../../api/clientApi"; 

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
        height: 35%;
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
    width: 200px;
    height: 200px;
    padding: 15px;
    overflow: hidden;
  }

  ul li p {
    text-align: start;
    padding-bottom: 10px;
    font-weight: bold;
  }

  ul li img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
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
  const [instructorInfo, setInstructorInfo] = useState([]);
  const [selectInstructor, setSelectInstructor] = useState(null);
  const [selected, setSelected] = useState(null); // 상세 데이터

  // 숫자 자리수 맞추는 함수
  const padNumber = (number) => number.toString().padStart(2, "0");

  // 목록 호출
  useEffect(() => {
    fetchInstructors().then((res) => {
      const sorted = res.data.data.sort((a, b) => a.orderIndex - b.orderIndex);
      setInstructorInfo(sorted);
      if (sorted.length > 0) {
        setSelectInstructor(sorted[0].id);
      }
    });
  }, []);

  // 상세 정보 호출
  useEffect(() => {
    if (selectInstructor !== null) {
      fetchInstructorById(selectInstructor).then((res) => {
        setSelected(res.data.data);
      });
    }
  }, [selectInstructor]);

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
              <h2>{instructorInfo.find((item) => item.id === selectInstructor)?.title}</h2>
              <span>POSITION</span>
            </div>
            <div>
              <span>약력</span>
              <p>{selected?.description}</p>
            </div>
          </InfoBox>
          <ImgBox>
            <span>{instructorInfo.find((item) => item.id === selectInstructor)?.title}</span>
            <img
              src={instructorInfo.find((item) => item.id === selectInstructor)?.thumbnailUrl}
              alt="프로필이미지"
            />
          </ImgBox>
        </Middle>
        <MoreBox>
          <h4>MORE</h4>
          <ul>
            {instructorInfo.map((person) => (
              <li key={person.id}>
                <p>{padNumber(person.orderIndex)}</p>
                <img
                  src={person.thumbnailUrl}
                  onClick={() => {setSelectInstructor(person.id); scrollToTop();}}
                  alt={person.title}
                />
              </li>
            ))}
          </ul>
        </MoreBox>
      </Container>
    </Wrap>
  );
};

export default Instructor;