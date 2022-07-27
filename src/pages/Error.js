import React from "react";
import Content from "../components/Content";
import { NotiImg, NotiTitle, NotiDesc } from "../components/Noti";

function Error() {
    return (
        <Content padding="100px 0" direction="center">
            <NotiImg src={process.env.PUBLIC_URL + `/static/img/noti/404.png`} alt="404 에러" width={"300px"} />
            <NotiTitle>페이지를 찾을 수 없습니다.</NotiTitle>
            <NotiDesc>
                페이지가 존재하지 않거나, 찾을 수 없는 페이지입니다.<br/>
                입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </NotiDesc>
        </Content>
    );
}

export default Error;