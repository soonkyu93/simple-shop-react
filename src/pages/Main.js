import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import Card from '../components/Card.js';

const Content = styled.div`
	margin: 0 auto 0 auto;
	width: 60%;
    background-color: #FFF;
`;

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

function Main() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState("false");

    useEffect(() => {
        setLoading(true);
        axios.get("https://gist.githubusercontent.com/sypear/79455cda14403e74b99d66d5b0e8891b/raw/be7a559b737e5bdd4024d2eb083ec64e55b2b674/productData.json")
        .then((res) => {
            setLoading(false);
            setProduct([...res.data]);
        })
        .catch(() => {
            setLoading(false);
            console.log("err");
        })
    }, []);

	return (
		<main>
            <MainImgWrapper>
                <MainImg src={process.env.PUBLIC_URL + `/static/img/main/main1.png`} alt="메인 이미지" />
            </MainImgWrapper>

            <Content>
                {
                    loading === true ? <LoadingImg src={process.env.PUBLIC_URL + `/static/icon/loading.gif`} alt="로딩 중" /> :
                    <>
                        <CardTitle>
                            <strong>👇이번 주 TOP5</strong>
                        </CardTitle>

                        <CardWrapper> 
                            {
                                product.map((element, i) => {
                                    return (
                                        <Card product={element} i={i} key={i}></Card>
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
