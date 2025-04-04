import React from "react";
// import { BrowserRouter as Link } from "react-router-dom";
import "./css/center_info_style.css";
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100vw;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Centerinfo() {
    return(
        <Wrap>
            <section id="contentB1">
                <img src="img/center_info_img.png" alt="center_info_img" />
            </section>

            <section id="contentB2">
                <div className="line"></div>
                <h2 className="title">인삿말</h2>
                <div className="welcome_container">
                    <div id="welcome_decoration"></div>
                    <h3 className="left bold">골프는<br />즐겁게 배워야 한다는 것,<br />멤버스 골프 아카데미의<br />철학입니다.</h3>
                    <div className="right">
                        <p>멤버스 골프 아카데미는 LPGA 티칭 메뉴얼을 기반으로 한 체계적인 커리큘럼으로 골프 레슨을 제공합니다. 국내외 검증된 프로 골퍼들로 구성된 강사진이 개개인의 실력과 목표에 따른 맞춤형 지도를 진행합니다.<br/><br/>골프는 즐겁게 배워야 한다는 것, 멤버스 골프 아카데미의 철학입니다. 편안한 환경에서 즐겁게 훈련하실 수 있도록 최상의 시설과 서비스를 선사하겠습니다.</p>
                    </div>
                </div>
            </section>

            <section id="contentB3">
                <img src="img/LOGO.png" alt="logo" />
                <h3>학생 중심의 LPGA 철학을 바탕으로 한<br />체계적인 교육을 지향합니다.</h3>
                <ul>
                    <li className="education_container bg_deep">
                        <h4 className="light">Leadership<br />리더십</h4>
                        <img src="img/readership_icon.png" alt="redership icon" />
                    </li>
                    <li className="education_container bg_light">
                        <h4 className="deep">Communication<br />커뮤니케이션</h4>
                        <img src="img/communication_icon.png" alt="Communication icon" />
                    </li>
                    <li className="education_container bg_deep">
                        <h4 className="light">Fitness<br />피트니스</h4>
                        <img src="img/fitness_icon.png" alt="Fitness icon" />
                    </li>
                    <li className="education_container bg_light">
                        <h4 className="deep">Somatology<br />& Kinematics<br />생체학 및<br />운동역학</h4>
                        <img src="img/somatology_icon.png" alt="Somatology icon" />
                    </li>
                    <li className="education_container bg_deep">
                        <h4 className="light">Golf equipment<br />골프장비의<br />고려</h4>
                        <img src="img/equipment_icon.png" alt="equipment icon" />
                    </li>
                    <li className="education_container bg_light">
                        <h4 className="deep">Psychological<br />Analysis<br />심리적분석</h4>
                        <img src="img/psychological_icon.png" alt="Psychological icon" />
                    </li>
                </ul>
            </section>

            <section id="contentB4">
                <p className="light">멤버스 골프 아카데미는 미국 LPGA의 전문적인 티칭 매뉴얼을 기반으로 한 체계적인 교육 시스템을 자랑합니다.<br />
                    정확한 분석과 효율적인 커리큘럼을 통해 단기간 내 실력 향상의 최적화를 지향합니다. <br />
                    기술 향상은 물론, 개인의 스타일과 감각을 고려한 맞춤형 프로그램을 통해 모든 골퍼에게 최적의 솔루션을 제공합니다.</p>
            </section>

            <section id="contentB5">
                <div className="line"></div>
                <h2 className="title">오시는 길</h2>
                <div className="route_container">
                    <h3 className="bold">멤버스골프아카데미 도곡점</h3>
                    <div className="right">
                        <div className="icon_container">
                            <img src="img/icon_map.png" alt="map icon" />
                            <div>
                                <h5>주소</h5>
                                <p>서울특별시 강남구 도곡로 218 V타워 지하 1층</p>
                            </div>
                        </div>
                        <div className="icon_container">
                            <img src="img/icon_call.png" alt="call icon" />
                            <div>
                                <h5>전화번호</h5>
                                <p>010-1234-1234</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map_container">
                    <img className="map" src="img/map.png" alt="map" />
                    <img className="location" src="img/location_icon.png" alt="location_icon" />
                    <div className="shadow"></div>
                </div>
            </section>
        
        </Wrap>
    );
};

export default Centerinfo;
