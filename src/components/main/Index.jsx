import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// css
import './css/main_style.css';

// swiper 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import Button from '../etc/Button';
import MobileContent2 from './MobileContent2';
import ButtonBlack from '../etc/ButtonBlack';


const Wrap = styled.div`
    width: 100vw;
    margin: auto;
`;


const Index = ({isMobile}) => {

    const navigate = useNavigate();


    // 데이터
    const lessons = [
        { id: "A", title: "키즈 프로그램", description: `멤버스골프아카데미의 특화된
            유아 골프전문 프로그램` },
        { id: "B", title: "주니어 프로그램", description: `초등학생을 대상으로 한
            주니어 골프 전문 프로그램램` },
        { id: "C", title: "성인 프라이빗 레슨", description: `1:1 개인 레슨으로 맞춤형
            교육을 통해 진행되는 프로그램` },
        { id: "D", title: "성인 프리미엄 그룹레슨", description: `1:2 ~ 1:5 단체 레슨
            매주 짜여진 커리큘럼에 맞춰 진행 ` },
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

    // 함수
    const goToLesson = (des) => {
        console.log(des);        
        navigate('/lesson', {
            state: { title: `${des}` }, // 함수 키 값 전달
        })
        
    }

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
                {isMobile || <h2 className="title">센터소개</h2>}
                {isMobile || 
                <div className="pic">
                    <img src="/img/center_info2.png" alt="center_img" />
                </div>
                }
                <p className={isMobile?"mobile_p":"p"}>
                    멤버스 골프 아카데미는 LPGA 티칭 메뉴얼을 기반으로 한 <br />
                    <span className="strong">체계적인 커리큘럼과 검증된 프로 강사진의 맞춤형 레슨을 통해</span> <br />
                    즐겁고 효과적인 골프 경험을 제공합니다.
                </p>
                {isMobile && 
                    <div className="mobilePic">
                        <img src="/img/center_info2.png" alt="center_img" />
                        <Button className="mybutton" text="자세히보기"/>
                    </div>
                }
            </section>

            {isMobile ? <MobileContent2 lessons={lessons} />
            :
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
                                    <a onClick={()=>goToLesson(lesson.title)}>더 알아보기</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>}

            <section id="content3">
                <h2 className="title">인스트럭터</h2>
                {isMobile ||
                    <h4 className="subtitle">국내외에서 검증된 프로 골퍼들로 구성된 강사진이 최고의 골프 경험을 선사합니다.</h4>
                }
                <ul className="instructor">
                    {instructors.map((inst, index) => (
                        <li className="profile" key={index}>
                            <div onClick={()=> navigate('/instructor')}>
                                <img src={inst.img} alt="profile" />
                                {isMobile || <p className="profile_name">{inst.name}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
                {isMobile && <ButtonBlack className="addStyle" text={"더보기"}/>}
            </section>

            <section id="content4">
                <div className="content4_container">
                    <h2 className="title">PARTNER</h2>
                    <h4 className="subtitle">멤버스골프아카데미와 함께하는 파트너입니다.</h4>
                    <ul className={isMobile? "mobile_partner_container": "partner_container"}>
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
