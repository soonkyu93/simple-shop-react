import { useNavigate } from 'react-router-dom';
import React from "react";
import styled from "styled-components";

const HeaderContent = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 30px 0 30px 50px;
    border-bottom: 1px solid #CCC;
    background-color: #FFF;
`

const Logo = styled.h1`
    margin-right: 50px;
    font-size: 40px;
`

const MenuList = styled.ul`
    display: flex;
    padding-bottom: 5px;
    font-size: 23px;
`;

const Menu = styled.li`
    margin-right: 40px;
    cursor: pointer;
`;

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <HeaderContent>
                <Logo>ohsul</Logo>

                <nav>
                    <MenuList>
                        <Menu onClick={() => { navigate("/") }}>메인</Menu>
                        <Menu onClick={() => { navigate("/cart") }}>장바구니</Menu>
                    </MenuList>
                </nav>
            </HeaderContent>
        </header>
    );
}

export default Header;
