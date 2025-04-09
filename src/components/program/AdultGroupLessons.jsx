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
//         height: 150px;
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
        h4 { font-size: 1.2rem; width:60%; margin:auto; }
        p { white-space:pre-line; word-break:keep-all; }
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

    @media (max-width:1024px) {
        width: 80%;
        height: 300px;
        margin: auto;
        margin-top: 80px;

        ul {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 55px;
            word-break:keep-all;

            margin: auto;
        }


        img {
            position: absolute;
            width: 100%;
            height: 100%; 
            object-fit: cover;

            left: 50%;
            transform: translateX(-50%);
            opacity: 0.3;
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

    @media (max-width:1024px) {
        display: block;
        top: 0px;
    }
`;

const Box = styled.div `
    /* width: 50px; */
    display: inline;
    text-align: start;
    font-size: 1.7rem;

    position: absolute;

    @media (max-width:1024px) {
        font-size: 1rem;

        position: relative;
        br { display:none; }
    }
`;

const TopLeft = styled(Box)`
    top: 30px;
    left: 30px;
    @media (max-width:1024px) {
        top: 0;
        left: 0;
    }
`;

const TopRight = styled(Box)`
    top: 30px;
    right: 30px;
    @media (max-width:1024px) {
        top: 0;
        right: 0;
    }
`;

const BottomLeft = styled(Box)`
    bottom: 30px;
    left: 30px;
    @media (max-width:1024px) {
        bottom: 0;
        left: 0;
    }
`;

const BottomRight = styled(Box)`
    bottom: 30px;
    right: 30px;
    @media (max-width:1024px) {
        bottom: 0;
        right: 0;
    }
`;


const AdultGroupLessons = () => {
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
        fetchLessonById(4).then((res) => {
        setLesson(res.data.data);
        });
    }, []);

    return (
        <>
            {/* <TitleDiv>
                <h2>Adult<br/>Premium<br/>Group<br/>Lessons</h2>
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
                <img src="img/adult_group_lessons_img.jpg" alt="adult_group_lessons_img" />
                <ul>
                    <TopLeft><Circle/>멤버스골프아카데미만의<br /> 과학적이고 체계적인 커리큘럼</TopLeft>
                    <BottomLeft><Circle/>퍼포먼스 향상을 위한<br /> 멤버스골프아카데미만의 연습드릴</BottomLeft>
                    <TopRight><Circle/>골프과학의 이론적이해</TopRight>
                    <BottomRight><Circle/>그룹레슨을 통한 커뮤니티 활성</BottomRight>
                </ul>
            </DetailDiv> */}
            
        </>
    );
};

export default AdultGroupLessons;