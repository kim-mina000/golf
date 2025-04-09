import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { fetchSlideById, fetchLessons, fetchLessonById, fetchInstructors } from "../../api/clientApi"; 

// css
import './css/main_style.css';

// 아이콘
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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


const Index = ({isMobile, isTablet}) => {

    const navigate = useNavigate();

    // lessons
    const [lessonDetails, setLessonDetails] = useState([]);

    const alphabet = ["A", "B", "C", "D"]; // index용 알파벳
  
    useEffect(() => {
      const loadLessons = async () => {
        try {
          const res = await fetchLessons();
          const lessonList = res.data.data; // [{ id, title }, ...]
  
          const detailPromises = lessonList.map((lesson) =>
            fetchLessonById(lesson.id).then(res => res.data.data)
          );
  
          const details = await Promise.all(detailPromises);
          setLessonDetails(details); // [{ title, description, ... }, ...]
        } catch (err) {
          console.error("레슨 불러오기 오류", err); 
        }
      };
  
      loadLessons(); 
    }, []);

    // instructors
    const [instructorInfo, setInstructorInfo] = useState([]);
    const [selectInstructor, setSelectInstructor] = useState(null);
    const [selected, setSelected] = useState(null); // 상세 데이터

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

    // 함수 : A,B,C,D 네개의 프로그램중에 클릭한 프로그램의 이름을 lesson페이지에 전달, 이동
    const goToLesson = (categoryName) => {
        navigate('/lesson', {
            state: { categoryName }
        });
    };

    const partners = [
        "img/partner_img01.png",
        "img/partner_img02.png",
        "img/partner_img03.png",
        "img/partner_img04.png",
        "img/partner_img05.png",
        "img/partner_img06.png",
        "img/partner_img07.png",
        "img/partner_img08.png",
        "img/partner_img09.png",
        "img/partner_img10.png"
    ];
      
    const [images, setImages] = useState([]);
    const [delay, setDelay] = useState(3000); // 기본 3초
  
    useEffect(() => {
      fetchSlideById(1)
        .then((res) => {
          const slideData = res.data.data;
          setImages(slideData.images || []);
          setDelay(slideData.showSec || 3000); // API에서 받아온 showSec 사용
        })
        .catch((err) => console.error("슬라이드 데이터 가져오기 실패:", err));
    }, []);

    return (
        <Wrap>
            <Swiper
            loop={true}
            className="swiper mySwiper"
            id="slider"
            slidesPerView={1}
            autoplay={{
                delay: delay,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                <a href="#">
                    <img src={img} alt={`슬라이드 이미지 ${index + 1}`} />
                </a>
                </SwiperSlide>
            ))}
            </Swiper>

            <section id="content1">
                {isMobile || <h2 className="title">센터소개</h2>} 
                    <p className={isMobile?"mobile_p":"p"}>
                    멤버스 골프 아카데미는 LPGA 티칭 메뉴얼을 기반으로 한 <br />
                    <span className="strong">체계적인 커리큘럼과 검증된 프로 강사진의 맞춤형 레슨을 통해</span> <br />
                    즐겁고 효과적인 골프 경험을 제공합니다.
                </p>
                {isMobile || 
                <div className="pic">
                    <img src="/img/center_info2.png" alt="center_img" />
                </div>
                }

                {isMobile && 
                    <div className="mobilePic">
                        <img src="/img/center_info2.png" alt="center_img" />
                        <Button className="mybutton" text="자세히보기" location="centerInfo"/>
                    </div>
                }
            </section>

            {isTablet ? <MobileContent2 lessonDetails={lessonDetails} goToLesson={goToLesson} />
            :
            <section id="content2">
                <div className="content2_wrap">
                    <h2 className="title">프로그램</h2>
                    <h4 className="subtitle">골프는 즐겁게 배워야 한다는 것, 멤버스골프아카데미의 철학입니다.</h4>
                    <ul className="lesson_pick">
                        {lessonDetails.map((lesson, index) => (
                            <li key={lesson.id || index}>
                            <div className="li_container">
                                <div className="alphabet_box"><p>{alphabet[index]}</p></div>
                                <h3>{lesson.title}</h3>
                                <p>{lesson.description}</p>
                                <div className="line"></div>
                                <a onClick={() => goToLesson(lesson.categoryName)}>더 알아보기</a>
                            </div>
                            </li>
                        ))}
                    </ul>
                    <IoIosArrowBack className="iconLeft colorWhite"/>
                    <IoIosArrowForward className="iconRight colorWhite"/>
                </div>
            </section>}

            <section id="content3">
                <h2 className="title">인스트럭터</h2>
                {isMobile ||
                    <h4 className="subtitle">국내외에서 검증된 프로 골퍼들로 구성된 강사진이 최고의 골프 경험을 선사합니다.</h4>
                }
                <ul className="instructor">
                    {instructorInfo.map((person) => (
                        <li className="profile" key={person.id}>
                            <div onClick={()=> navigate('/instructor')}>
                                <img src={person.thumbnailUrl} alt={person.title} />
                                {isMobile || <p className="profile_name">{person.title}</p>}
                            </div>
                        </li>
                    ))}
                <IoIosArrowBack className="iconLeft"/>
                <IoIosArrowForward className="iconRight"/>
                </ul>
                {isMobile && <ButtonBlack className="addStyle" text={"더보기"} location="instructor" />}
            </section>

            <section id="content4">
                <div className="content4_container">
                    <h2 className="title">파트너</h2>
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
