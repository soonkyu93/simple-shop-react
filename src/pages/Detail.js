import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

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
    width: 30%;
    height: 400px;
    margin-bottom: 40px;
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
    margin-bottom: 40px;
    font-size: 23px;
`;

function Detail(props) {
    const [showAlert, setShowAlert] = useState(true);
    let {id} = useParams();
    const targetItem = props.product.find(item => item.id === +id);

    useEffect(() => {
        console.log(props.product);
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        return(() => {
            clearTimeout(timer);
        });
    }, []);

    return (
        <>
            {
                showAlert === true? <EventAlert>🔥 5개 구매 시 1개 무료 증정 이벤트 진행 중! 🔥</EventAlert> : null
            }
            <Content>
                <div>
                    <ProductImgWrapper>
                        <ProductImg src={process.env.PUBLIC_URL + `/static/img/product/${targetItem?.id + 1}.jpg`} alt="어쩌구" />
                    </ProductImgWrapper>
                    <div>
                        <ProductTitle>{targetItem?.title}</ProductTitle>
                        <ProductPrice>{targetItem?.price}원</ProductPrice>
                        <ProductDesc>{targetItem?.content}</ProductDesc>
                        <Button>장바구니</Button>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Detail;