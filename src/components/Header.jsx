import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Wrap = styled.div`
    width: 100vw;
    margin: auto;
    font-family: 'IBMPlexSansKR-Regular';
    `;

const HeaderWrap = styled.header`
    max-width: 1200px;
    height: 148px;
    
    display: flex;
    align-items: center;
    margin: auto;
    z-index: 99;
`;

const MenuContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    
    a {
        padding: 15px 30px;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

const Logo = styled.div`
    width: 100px;
    height: 100px;
    width: 20%;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    img {
        width: 100px;
        background-image: url('../LOGO.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

`;

function Header() {

    const navigate = useNavigate();
    
    return (
        <Wrap>
            <HeaderWrap>
                <Logo onClick={()=> navigate("/")}><img src="img/LOGO.png" alt="logo" /></Logo>
                <MenuContainer>
                    <Link to="/">홈</Link>
                    <Link to="/centerInfo">센터소개</Link>
                    <Link to="/lesson">레슨프로그램</Link>
                    <Link to="/instructor">인스트럭터</Link>
                </MenuContainer>
            </HeaderWrap>
        </Wrap>
    );
    
}

export default Header;