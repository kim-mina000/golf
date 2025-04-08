import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Wrap = styled.header`
    width: 90vw;
    height: 60px;
    margin: auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    z-index:99;

    img {
        width: 120px;
        cursor: pointer;
    }
`;

const StyledCiMenuFries = styled(CiMenuFries)`
    font-size: 21px;
    color : ${({showMenu}) => (showMenu? 'white' : 'black')};
`;

const MobileHeader = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);




    // 냥냥 
    // const menuShowBG = () => {
    //     setShowMenu(!showMenu);
    //     // 창이 열려있을 때
    //     if (showMenu === true) {
    //         document.body.style.overflow = "auto";
    //     } else {
    //         document.body.style.overflow = "hidden";
    //     }
    // };

    function navigateEvent (where) {
        navigate(`/${where}`);
        setShowMenu(false);
    }

    return (
        <>
            <Wrap>
                <div>
                    <img 
                        onClick={() => navigateEvent("")} 
                        src={showMenu ? "img/LOGO_row_white.png" : "img/LOGO_row.png"} 
                        alt="LOGO" 
                    />
                </div>
                <StyledCiMenuFries 
                    onClick={() => setShowMenu(!showMenu)} 
                    showMenu={showMenu} 
                />
            </Wrap>

            {showMenu && <MobileMenu 
                showMenu={showMenu}
                navigateEvent={navigateEvent}
            />}
        </>
    );
};

export default MobileHeader;