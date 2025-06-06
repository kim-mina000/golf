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
    gap: 1.2rem;
    text-align: center;
    line-height: 1.3;

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

        white-space: pre-line;
        word-break: keep-all;

        h2 { font-size: 1.5rem; margin-top:40px}
        h4 { font-size: 1.2rem; }
    }

`;

const DetailDiv = styled.div`
    width: 80%;
    margin-top: 40px;
    margin: auto;
    padding-left: 5%;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    

    &>div {
        margin-top: 80px;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;
        position: relative;
    };
    &>div>div {
        line-height: 1.3;
    }

    h2 {
        font-size: 3rem;
        padding-bottom: 15px;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    p {
        white-space: nowrap;
    }

    @media (max-width:1024px) {
        flex-direction: column;
        align-items: start;

        &>div {
            flex-direction: row;
        }
        &>div>div {
            margin-left: 15px;
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

`;

const JuniorProgram = () => {
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
        fetchLessonById(2).then((res) => {
        setLesson(res.data.data);
        });
    }, []);

    return (
        <>
            {/* <TitleDiv>
                <h2>JUNIOR<br/>PROGRAM</h2>
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
                    <Circle/>
                    <h2>01</h2>
                        <div>   
                            <h4>건강</h4>
                            <p>골프를 통해 활기차고 건강한 삶,<br/>운동 능력을 향상시킵니다.</p>
                        </div>
                </div>
                <div>
                    <Circle/>
                    <h2>02</h2>
                    <div>
                        <h4>도전</h4>
                        <p>도전활동에 필요한 기본방법을 배우고,<br/>스스로 실천할 수 있는 힘을 기릅니다.</p>
                    </div>
                </div>
                <div>
                    <Circle/>
                    <h2>03</h2>
                    <div>
                        <h4>경쟁</h4>
                        <p>건강한 경쟁심과 협동심을<br/>함께 키워나가는 과정입니다.</p>
                    </div>
                </div>
                <div>
                    <Circle/>
                    <h2>04</h2>
                    <div>
                        <h4>만남</h4>
                        <p>특별한 사회적 기회와<br/>교우관계를 제공합니다.</p>
                    </div>
                </div>
                <div>
                    <Circle/>
                    <h2>05</h2>
                    <div>
                        <h4>표현</h4>
                        <p>자기표현과 의사소통능력<br/>향상에 도움을 줍니다.</p>
                    </div>
                </div>
                <div>
                    <Circle/>
                    <h2>06</h2>
                    <div>
                        <h4>여가</h4>
                        <p>놀이를 통해 골프를 이해하고,<br/>자연과 친해지는 경험을 선사합니다.</p>
                    </div>
                </div>
            </DetailDiv> */}
            
        </>
    );
};

export default JuniorProgram;