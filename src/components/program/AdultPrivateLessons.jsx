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
//     @media (max-width:1024px) {
//         width: 50%;
//         height: 130px;
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

    h2 {
        font-weight: bold;
        font-size: 2rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    @media (max-width:1024px) {
        width: 80%;
        margin: auto;
        line-height: 1.5;



        br { display:none; }
        h2 { font-size: 1.5rem; margin-top:40px}
        h4 { font-size: 1.2rem; }
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
        /* 선요소 */
        content: "";
        display: block;
        width: 1px;
        height: 200px;
        background-color: #1c2716;

        position: absolute;
        bottom: 0;
    }

    @media (max-width:1024px) {
        ul {
            flex-direction: column;
        }
        ul li {
            text-align: center;
            width: 100%;
            height: auto;

        }
        ul li::before {
            display: none;
        }
        ul li>div {
            margin-top: 80px;
            position: relative;
        }

        
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
    @media (max-width:1024px) {
        display: none;
    }
`;


const AdultPrivateLessons = () => {
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
        fetchLessonById(3).then((res) => {
        setLesson(res.data.data);
        });
    }, []);

    return (
        <>
            {/* <TitleDiv>
                <h2>Adult<br/>Private<br />Lessons</h2>
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
            </DetailDiv> */}
        </>
    );
};

export default AdultPrivateLessons;