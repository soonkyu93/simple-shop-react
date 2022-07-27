import styled from "styled-components";

export const NotiImg = styled.img`
    width: ${ props => props.width };
    margin-bottom: ${ props => props.imageMarginBottom };
`;

export const NotiTitle = styled.h1`
    margin-bottom: 40px;
    font-size: 35px;
`;

export const NotiDesc = styled.p`
    font-size: 25px;
`;