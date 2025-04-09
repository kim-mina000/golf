import React from 'react';
import styled from 'styled-components';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Wrap = styled.section`
    width: 90vw;
    height: 350px;
    background-color: #1c2619;

    margin-top: 40px;
    margin-left: auto;
    position: relative;

    overflow: hidden;

    h2 {
        font-size: 1.5rem;
        color: white;
        margin-top: 20px;
        text-align: center;
    }

`;

const Container = styled.div`
    width: 100%;
    height: 75%;
    position: absolute;
    bottom: 0;

    overflow-x: auto;

    .swipper_container {
        width: 70%;
        overflow: visible;
        margin-left:0;
        height: 100%;
        color: white;
    }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    line-height: 2;

    &>div {
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-left: 25px;
        word-break: keep-all;
    }
    & p {
        line-height: 1.3;
        font-size: 0.8rem;
        font-weight: 200;
    }

    h3 {
        font-size: 1.3rem;
    }

    &::after {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        background: #fff;
        position: absolute;
        bottom: 0;
    }

    &:first-child::after{
        display: none;
    }

    &:hover{
        opacity: 0.6;
        transition: 0.5s;
        cursor: pointer;
    }

`;

const StyledBox = styled.div`

    width: 40px;
    height: 25px;
    border: 1px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    margin-bottom: 20px;

`;


const MobileContent2 = ({ lessonDetails, goToLesson }) => {
    const alphabet = ['A', 'B', 'C', 'D'];
    return (
        <Wrap>
            <h2>프로그램</h2>

            <Container>
                <Swiper
                    className='swipper_container'
                    modules={[Navigation, Pagination, A11y]}
                >   
                    <ul>
                        {lessonDetails.map((lesson, index) => (
                            <li key={lesson.id || index}>
                                <StyledSwiperSlide>
                                    <div onClick={() => goToLesson(lesson.categoryName)}>
                                        <StyledBox>
                                            <div className="alphabet_box">
                                                <p>{alphabet[index]}</p>
                                            </div>
                                        </StyledBox>
                                        <h3>{lesson.title}</h3>
                                        <p>{lesson.description}</p>
                                    </div>
                                </StyledSwiperSlide>
                            </li>
                        ))}
                    </ul>
                </Swiper>
            </Container>
        </Wrap>
    );
};


export default MobileContent2;