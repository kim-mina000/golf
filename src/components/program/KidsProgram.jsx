import { useEffect, useState } from "react";
import styled from 'styled-components';
import { fetchLessonById } from "../../api/clientApi"; 

// const TitleDiv = styled.div`
//     width: 20%;
//     height: 20%;
//     position: absolute;
//     top: 85px;
//     left: 35px;
//     background-color: #3a502f;

//     text-align: end;
//     font-size: 2rem;
//     h2 {
//         color: #fff;
//         padding: 15px;
//         position: absolute;
//         bottom: 0;
//         right: 0;
//     }
    
//     @media (max-width:599px) {
//         width: 50%;
//         height: 100px;
//     }
// `;

const ImageDiv = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* cover → contain 으로 비율 유지 */
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

    @media (max-width:599px) {
        width: 80%;
        margin: auto;
        line-height: 1.5;

        h2 { font-size: 1.5rem; margin-top:40px}
        h4 { font-size: 1.2rem; }
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

    @media (max-width:1024px) {
        width: 80%;
        line-height: 1.3;
        box-sizing: border-box;
        padding-left: 0;
        
        br { display: none; }

        h2 { font-size: 1.8rem; }
        h4 { font-size: 0.9rem; }   
        p { white-space: pre-wrap; text-align:center; word-break:normal; padding:0 10px 0 10px; font-size:0.8rem; }

        &>div {
            height: 150px;
            display: flex;
            align-items: center;
        }
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

    @media (max-width:599px) {
        top: 0;
        left: 40px;
    }
`;


const KidsProgram = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [lesson, setLesson] = useState(null);

    // 미디어 쿼리 감지
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      fetchLessonById(1).then((res) => {
        setLesson(res.data.data);
      });
    }, []);
  
    return (
      <>
        {/* <TitleDiv>
          <h2>KIDS<br />PROGRAM</h2>
        </TitleDiv> */}
  
        <ImageDiv>
            <img
                src={
                isMobile
                    ? lesson?.mobileUrl
                    : lesson?.pcUrl
                }
                alt={lesson?.title}
            />
        </ImageDiv>
  
        <ContentDiv>
          <h2>{lesson?.title}</h2>
          <p>
            {lesson?.description}
          </p>
        </ContentDiv>
  
        {/* <DetailDiv>
          <div>
            <Circle />
            <h2>01</h2>
            <h4>진짜 골프를 즐겨요</h4>
            <p>친구들과 함께 PAR3, 스크린골프, 정규 18홀</p>
          </div>
          <div>
            <Circle />
            <h2>02</h2>
            <h4>쑥쑥 자라요</h4>
            <p>
              건강하고 튼튼하게 자라도록<br />다양한 신체활동 프로그램을 함께해요.
            </p>
          </div>
          <div>
            <Circle />
            <h2>03</h2>
            <h4>엄마아빠와 함께</h4>
            <p>
              학부모님과 함께 하는 행사가 열려요.<br />아이와 부모님 모두에게 좋은 추억을 남기세요.
            </p>
          </div>
          <div>
            <Circle />
            <h2>04</h2>
            <h4>골프가 최고!</h4>
            <p>
              다양한 수상제도를 진행합니다.<br />아이들에게 경쟁이 아닌 동기부여와 흥미를 유발시켜요.
            </p>
          </div>
        </DetailDiv> */}
      </>
    );
  };

export default KidsProgram;