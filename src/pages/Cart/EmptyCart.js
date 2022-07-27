import React from "react";
import Content from "../../components/Content"
import { NotiImg, NotiTitle, NotiDesc } from "../../components/Noti"

function EmptyCart(props) {
    return (
        <>
            <NotiImg src={process.env.PUBLIC_URL + `/static/img/noti/empty.png`} alt="빈 장바구니" width={"250px"} imageMarginBottom={"50px"} />
            <NotiTitle>장바구니가 비어있어요.</NotiTitle>
            <NotiDesc>
                상품 구경 후 장바구니에 상품을 담아보세요!
            </NotiDesc>
        </>
    );
}

export default EmptyCart;