import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from '../components/Card.js';
import Content from "../components/Content.js";

const MainImgWrapper = styled.div`
	width: 100%;
	height: 420px;
    margin-bottom: 100px;
    border-radius: 5px;
`;

const MainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 85%;
`;

const CardTitle = styled.div`
    font-size: 23px;
    margin-bottom: 10px;
`;

const CardWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const LoadingImg = styled.img`
    display: block;
    margin: 0 auto 100px auto;
`;

function Main(props) {
	return (
		<main>
            <MainImgWrapper>
                <MainImg src={process.env.PUBLIC_URL + `/static/img/main/main1.png`} alt="메인 이미지" />
            </MainImgWrapper>
            
            <Content direction="left">
                {
                    props.loading === true ? <LoadingImg src={process.env.PUBLIC_URL + `/static/icon/loading.gif`} alt="로딩 중" /> :
                    <>
                        <CardTitle>
                            <strong>👇이번 주 TOP5</strong>
                        </CardTitle>

                        <CardWrapper>
                            {
                                props.product.map((element, i) => {
                                    return (
                                        <Card product={element} i={i} key={i} />
                                    );
                                })
                            }
                        </CardWrapper>
                    </>
                }
            </Content>
		</main>
	);
}

export default Main;
