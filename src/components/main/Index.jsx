import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import './css/main_style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";


const Wrap = styled.div`
    width: 100vw;
    margin: auto;
`;


const Index = () => {

    const navigate = useNavigate();

    const lessons = [
        { id: "A", title: "키즈 프로그램", description: "유아 골프전문 프로그램" },
        { id: "B", title: "성인그룹레슨", description: "1:2 ~ 1:5 단체 레슨" },
        { id: "C", title: "성인 프라이빗 레슨", description: `1:1 개인 레슨으로 맞춤형
            교육을 통해 진행되는 프로그램` },
        { id: "D", title: "체험수업", description: `쉽고 재미있게 배우는
            원데이클래스` },
    ];

    const instructors = [
        { name: "황규정 프로", img: "img/profile (1).jpg" },
        { name: "조은애 프로", img: "img/profile (2).jpg" },
        { name: "임병관 프로", img: "img/profile (3).jpg" },
        { name: "황규정 프로", img: "img/profile (4).jpg" }
    ];

    const partners = [
        "img/partner_img01.jpg",
        "img/partner_img02.jpg",
        "img/partner_img03.jpg",
        "img/partner_img04.jpg",
        "img/partner_img05.jpg",
        "img/partner_img06.jpg",
        "img/partner_img08.png"
    ];

    return (
        <Wrap>
            <Swiper 
            loop={true}
            className="swiper mySwiper" id="slider"
            // spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000, // 3초마다 슬라이드 변경
                disableOnInteraction: false, // 유저가 터치해도 자동재생 유지
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            >
                    <SwiperSlide><a href="#"><img src="img/slider1.png" alt="main img1" /></a></SwiperSlide>
                    <SwiperSlide><a href="#"><img src="img/slider2.png" alt="main img2" /></a></SwiperSlide>
                    <SwiperSlide><a href="#"><img src="img/slider3.jpg" alt="main img3" /></a></SwiperSlide>
            </Swiper>

            <section id="content1">
                <h2 className="title">센터소개</h2>
                <div className="pic">
                    <img src="/img/center_info2.png" alt="center image" />
                </div>
                <p>
                    멤버스 골프 아카데미는 LPGA 티칭 메뉴얼을 기반으로 한 <br />
                    <span className="strong">체계적인 커리큘럼과 검증된 프로 강사진의 맞춤형 레슨을 통해</span> <br />
                    즐겁고 효과적인 골프 경험을 제공합니다.
                </p>
            </section>

            <section id="content2">
                <div className="content2_wrap">
                    <h2 className="title">프로그램</h2>
                    <h4 className="subtitle">골프는 즐겁게 배워야 한다는 것, 멤버스골프아카데미의 철학입니다.</h4>
                    <ul className="lesson_pick">
                        {lessons.map((lesson, index) => (
                            <li key={index}>
                                <div className="li_container">
                                    <div className="alphabet_box"><p>{lesson.id}</p></div>
                                    <h3>{lesson.title}</h3>
                                    <p>{lesson.description}</p>
                                    <div className="line"></div>
                                    <a href="#" onClick={()=> navigate('/lesson')}>더 알아보기</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="content3">
                <h2 className="title">인스트럭터</h2>
                <h4 className="subtitle">국내외에서 검증된 프로 골퍼들로 구성된 강사진이 최고의 골프 경험을 선사합니다.</h4>
                <ul className="instructor">
                    {instructors.map((inst, index) => (
                        <li className="profile" key={index}>
                            <a href="#" onClick={()=> navigate('/instructor')}>
                                <img src={inst.img} alt="profile" />
                                <p className="profile_name">{inst.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="content4">
                <div className="content4_container">
                    <h2 className="title">PARTNER</h2>
                    <h4 className="subtitle">멤버스골프아카데미와 함께하는 파트너입니다.</h4>
                    <ul className="partner_container">
                        {partners.map((imgSrc, index) => (
                            <li key={index}><img src={imgSrc} alt="partner company logo" /></li>
                        ))}
                    </ul>
                </div>
            </section>
        </Wrap>
    );
};

export default Index;
