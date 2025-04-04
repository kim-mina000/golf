import React, { useState } from 'react';
import styled from 'styled-components';

import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Wrap = styled.header`
    width: 90vw;
    height: 50px;
    margin: auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    img {
        width: 120px;
        cursor: pointer;
    }
`;

const MenuWrap = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(255,255,255,0.5);
    
`;

const StyledCiMenuFries = styled(CiMenuFries)`
    font-size: 21px;
`;

const MobileHeader = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Wrap>
                <div><img onClick={()=> navigate('/')} src="img/LOGO_row.png" alt="LOGO_row" /></div>
                <StyledCiMenuFries />
            </Wrap>
            {showMenu && <MenuWrap />}
        </>
    );
};

export default MobileHeader;