import React, { useEffect, useState } from "react";
import styled from "styled-components";

const EventAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: #FFF;
    background-color: #000;
`;

const Content = styled.div`
	margin: 0 auto;
    padding: 100px 0;
	width: 60%;
    background-color: #FFF;
    text-align: center;
`;

const ProductImgWrapper = styled.div`
    margin: 0 auto;
    width: 50%;
    height: 400px;
    margin-bottom: 50px;
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const ProductTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 35px;
`;

const ProductPrice = styled.strong`
    display: block;
    margin-bottom: 20px;
    font-size: 20px;
`;

const ProductDesc = styled.p`
    font-size: 23px;
`;

function Detail() {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        return(() => {
            clearTimeout(timer);
        });
    }, []);

    return (
        <>
            {
                showAlert === true? <EventAlert>진행 중인 이벤트 보러가기🔥</EventAlert> : null
            }

            <Content>
                <div>
                    <ProductImgWrapper>
                        <ProductImg src={process.env.PUBLIC_URL + `/static/img/product/3.jpg`} alt="어쩌구" />
                    </ProductImgWrapper>
                    <div>
                        <ProductTitle>설렘소주</ProductTitle>
                        <ProductPrice>2900원</ProductPrice>
                        <ProductDesc>경북 사과로 만든 전통주</ProductDesc>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Detail;