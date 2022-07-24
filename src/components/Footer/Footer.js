import React from "react";
import styled from "styled-components";

const FooterContent = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 0;
	border-top: 1px solid #D3D3D3;
    background-color: #FFF;
`

const FooterTitle = styled.h1`
	margin-bottom: 20px;
	font-size: 27px;
`

function Footer() {
	return (
		<footer>
			<FooterContent>
				<FooterTitle>
					ohsul : 오늘의 술
				</FooterTitle>
				<p>
					당신의 오늘을 위한, 오늘의 술
				</p>
			</FooterContent>
		</footer>
	);
}

export default Footer;