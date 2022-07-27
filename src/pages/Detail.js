import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Content from "../components/Content.js";
import { insertItem } from "../store/store";

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

    const {id} = useParams();
    const targetItem = props.product.find(item => item.id === +id);

    const dispatch = useDispatch();

    useEffect(() => {
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
            <Content padding="100px 0" direction="center">
                <div>
                    <ProductImgWrapper>
                        <ProductImg src={process.env.PUBLIC_URL + `/static/img/product/${targetItem?.id + 1}.jpg`} alt={targetItem?.title} />
                    </ProductImgWrapper>
                    <div>
                        <ProductTitle>{targetItem?.title}</ProductTitle>
                        <ProductPrice>{targetItem?.price}원</ProductPrice>
                        <ProductDesc>{targetItem?.content}</ProductDesc>
                        <Button onClick={() => {dispatch(insertItem(targetItem))}}>장바구니 담기</Button>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Detail;