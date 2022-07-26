import React from "react";
import styled from "styled-components";

const Item = styled.div`
    width: 33.33333333%;
    height: 500px;
    margin-bottom: 100px;
    padding: 0 10px;
    border-radius: 5px;
`;

const ThumbnailWrapper = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`;

const ContentWrapper = styled.article`
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 3px;
    font-size: 20px;
`

const Price = styled.strong`
    margin-bottom: 15px;
    font-size: 17px;
`

const Description = styled.p`
    font-size: 17px;
`

function Card(props) {
	return (
        <Item>
            <ThumbnailWrapper>
                <Thumbnail i={props.i} src={process.env.PUBLIC_URL + `/static/img/product/${props.i + 1}.jpg`} alt={`${props.product.title}`}></Thumbnail>
            </ThumbnailWrapper>
            <ContentWrapper>
                <Title>{props.product.title}</Title>
                <Price>{props.product.price}원</Price>
                <Description>{props.product.content}</Description>
            </ContentWrapper>
        </Item>
	);
}

export default Card;