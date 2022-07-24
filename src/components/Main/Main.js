import React, { useState } from "react";
import styled from "styled-components";
import productData from "../../data/data";
import Card from "../Card/Card";

const MainContent = styled.div`
	margin: 0 auto 0 auto;
	width: 60%;
    background-color: #FFF;
`;

const MainImageWrapper = styled.div`
	width: 100%;
	height: 420px;
    margin-bottom: 100px;
    border-radius: 5px;
`;

const MainImage = styled.img`
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

function Main() {
    const [product] = useState(productData);

	return (
		<main>
            <MainImageWrapper>
                <MainImage src={process.env.PUBLIC_URL + `/static/img/main/main1.png`} alt="메인 이미지" />
            </MainImageWrapper>

            <MainContent>
                <CardTitle>
                    <strong>👇이번 주 PICK</strong>
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
            </MainContent>
		</main>
	);
}

export default Main;
