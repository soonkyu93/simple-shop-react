import styled from "styled-components";

const Content = styled.div`
	margin: 0 auto;
    padding: ${ props => props.padding };
	width: 60%;
    background-color: #FFF;
    text-align: ${ props => props.direction }
`;

export default Content;