import React from "react";
import styled from "styled-components";

const HeaderContent = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    padding: 30px 0 30px 50px;
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
`;

function Header() {
    return (
        <header>
            <HeaderContent>
                <Logo>ohsul</Logo>

                <nav>
                    <MenuList>
                        <Menu>
                            메인
                        </Menu>
                        <Menu>
                            상세보기
                        </Menu>
                        <Menu>
                            이벤트
                        </Menu>
                    </MenuList>
                </nav>
            </HeaderContent>
        </header>
    );
}

export default Header;
