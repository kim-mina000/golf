import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useLocation  } from "react-router-dom";

// 아이콘
import { SlHome } from "react-icons/sl";
import { RxTriangleDown } from "react-icons/rx";

// 이미지
import KidsProgram from "./KidsProgram";
import JuniorProgram from "./JuniorProgram";
import AdultPrivateLessons from "./AdultPrivateLessons";
import AdultGroupLessons from "./AdultGroupLessons";

const Warp = styled.div`
    width: 100vw;
    height: 100%;
    /* 아래 여백 조절 */
    margin-bottom: 130px;
    

    
`;

const PhotoContainer = styled.div`
    max-width: 1200px;
    height: 400px;
    margin: auto;
    
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const InnerContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    position: relative;
`;

const SelectBar = styled.div`
    width: 100%;
    height: 48px;
    background-color: #1c2716;

    display: flex;
    justify-content: start;
    align-items: center;

    margin-top: 8px;

    h2 {
        width: 243px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        
        color: #fff;
        border-left: 1px solid white;
        }
    h2:hover {
        cursor: pointer;
    }
`;

const StyledSlHome = styled(SlHome)`
    font-size: 2rem;
    color: white;
    width: 24px;
    padding-left: calc((86px - 24px)/2);
    padding-right: calc((86px - 24px)/2);


    &:hover {
        cursor: pointer;
    }
`;

const DownMenu = styled.div`
    width: 230px;
    height: auto;
    background-color: #1c2716;
    position: absolute;
    z-index: 10;
    
    border-top: 1px solid #fff;
    
    ul li {
        color: #fff;
        cursor: pointer;
        padding: 10px 0 10px 15px;
        text-align: start;
    }

    ul li:last-child {
        padding-bottom: 20px;
    }

    .hidden {
        display: none;
    }

    @media (max-width: 599px) {
        width: 250px;
    }
`;

const SecondDownMenu = styled(DownMenu)`
    left: 292px;

    @media (max-width: 599px) {
        left: 159px;
    }
`;


function Main({isMobile}) {
    const location = useLocation();
    const categoryName = location.state?.categoryName || "주니어 클래스"; // ✅ categoryName으로 변경

    const [secondSelected, setSecondSelected] = useState(categoryName); // ✅ 문자열로 관리
    const [secondShow, setSecondshow] = useState(false);

    const navigate = useNavigate();
    
    const secondCategory = [
        {
            category: "주니어 클래스",
            page: <JuniorProgram />,
            img: "img/junior_program_timg.jpg"
        },
        {
            category: "키즈 클래스",
            page: <KidsProgram />,
            img: "img/kids_program_timg.jpg"
        },
        {
            category: "프라이빗 클래스",
            page: <AdultPrivateLessons />,
            img: "img/ault_private.png"
        },
        {
            category: "프로 레슨 클래스",
            page: <AdultGroupLessons />,
            img: "img/adult_premeium_group.png"
        }
    ];
    
    const toggle = (value, setValue) => {
        setValue(!value);
    };

    const changeSelect = (newCategoryName) => {
        setSecondSelected(newCategoryName);
        setSecondshow(false); // 드롭다운 닫기
    };

    const currentCategory = secondCategory.find(item => item.category === secondSelected);
    console.log(currentCategory);
    

    return (
        <Warp>
            <PhotoContainer>
                <img src={currentCategory.img} alt="lesson_visual_img" />
            </PhotoContainer>

            <InnerContainer>
                <SelectBar>
                <StyledSlHome onClick={() => navigate('/')} />
                {isMobile || <h2>레슨 프로그램<RxTriangleDown /></h2>}
                <h2 onClick={() => toggle(secondShow, setSecondshow)}>
                    {currentCategory?.category} <RxTriangleDown />
                </h2>
                </SelectBar>
                
                {secondShow && (
                    <SecondDownMenu>
                        <ul>
                            {secondCategory.map(item => (
                                <li key={item.category} onClick={() => changeSelect(item.category)}>
                                    {item.category}
                                </li>
                            ))}
                        </ul>
                    </SecondDownMenu>
                )}

                {/* 페이지 출력 */}
                {currentCategory?.page}
            </InnerContainer>
        </Warp>
    );
}

export default Main;