import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation  } from "react-router-dom";

// 아이콘
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

// 이미지
import KidsProgram from "./KidsProgram";
import JuniorProgram from "./JuniorProgram";
import AdultPrivateLessons from "./AdultPrivateLessons";
import AdultGroupLessons from "./AdultGroupLessons";
import FloatingMenu from "../../FloatingMenu";

const Warp = styled.div`
    width: 100vw;
    height: 100%;
    /* 아래 여백 조절 */
    margin-bottom: 130px;

    
`;

const PhotoContainer = styled.div`
    width: 100vw;
    height: 500px;

    img {
        width: 100%;
        height: 535px;
        background-size: contain;
    }
`;

const InnerContainer = styled.div`
    width: 1200px;
    margin: auto;
    position: relative;
`;

const SelectBar = styled.div`
    width: 100%;
    height: 60px;
    background-color: #1c2716;

    display: flex;
    justify-content: start;
    align-items: center;

    h2 {
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        
        color: #fff;
        border-left: 1px solid white;
        }
    h2+h2 {
        border-right: 1px solid white;
    }

    h2:hover {
        cursor: pointer;
    }
`;

const StyledIoMdHome = styled(IoMdHome)`
    font-size: 2rem;
    color: white;
    width: 60px;


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
`;

const SecondDownMenu = styled(DownMenu)`
    left: 292px;
`;


function Main() {
    const location = useLocation();
    const data = location.state?.title || "키즈 프로그램";
    

    const [secondSelected, setSecondSelected] = useState(data);
    const [secondShow, setSecondshow] = useState(false);


    const navigate = useNavigate();

    useEffect ( () => {
    },[secondSelected,secondShow])

    
    const secondCategory = [
        {
            index:1,
            category:"키즈 프로그램",
            page:<KidsProgram />
        },{
            index:2,
            category:"주니어 프로그램",
            page:<JuniorProgram />
        },
        {
            index:3,
            category:"성인 프라이빗 레슨",
            page:<AdultPrivateLessons />
        },
        {
            index:4,
            category:"성인 프리미엄 그룹레슨",
            page:<AdultGroupLessons />
        }
    ];
    
    function changeSelect(newCategory) {
            setSecondSelected(newCategory);
            setSecondshow(!secondShow);
    }

    function toggle(value, setValue) {
        setValue(!value);
    }


    return (
        <Warp>
            <PhotoContainer>
                <img src="img/lesson_visual.jpg" alt="lesson_visual_img" />
            </PhotoContainer>
            <InnerContainer>
                <SelectBar>
                    <StyledIoMdHome onClick={()=>navigate('/')} />
                    <h2>레슨 프로그램</h2>
                    <h2 onClick={()=>{toggle(secondShow,setSecondshow)}}>{secondSelected}<IoIosArrowDown/></h2>
                </SelectBar>
                
                {secondShow && <SecondDownMenu>
                    <ul>
                        {secondCategory.map( item => (
                            <li key={item.index} onClick={() => changeSelect(item.category)} >{item.category}</li>
                        ))}
                    </ul>
                </SecondDownMenu>}

                {/* 페이지 출력 */}
                {secondCategory.filter(item => item.category === secondSelected).map(item => item.page)}
            </InnerContainer>
            <FloatingMenu />
        </Warp>
    );
    
}

export default Main;