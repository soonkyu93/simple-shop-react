import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Content = styled.div`
	margin: 0 auto;
    padding: 100px 0;
	width: 60%;
    background-color: #FFF;
    text-align: center;
`;

const ErrorImg = styled.img`
    width: 300px;
    margin-bottom: 10px;
`;

const ErrorTitle = styled.h1`
    margin-bottom: 40px;
    font-size: 35px;
`;

const ErrorDesc = styled.p`
    font-size: 25px;
`

function Error() {
    return (
        <Content>
            <ErrorImg src={process.env.PUBLIC_URL + `/static/img/error/404.png`} alt="404 에러" />
            <ErrorTitle>페이지를 찾을 수 없습니다.</ErrorTitle>
            <ErrorDesc>
                페이지가 존재하지 않거나, 찾을 수 없는 페이지입니다.<br/>
                입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </ErrorDesc>
        </Content>
    );
}

export default Error;