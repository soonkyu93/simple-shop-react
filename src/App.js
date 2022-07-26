import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router/Router';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	min-height: 100%;
	padding-bottom: 150px;
`;

function App() {
	const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState("false");

    useEffect(() => {
        setLoading(true);

        axios.get("https://gist.githubusercontent.com/sypear/79455cda14403e74b99d66d5b0e8891b/raw/be7a559b737e5bdd4024d2eb083ec64e55b2b674/productData.json")
        .then((res) => {
            setLoading(false);

            setProduct([...product, ...res.data]);
        })
        .catch((e) => {
            setLoading(false);

            console.error(e);
        })
    }, []);

	return (
		<>
			<Wrapper>
				<Header></Header>
				<Router product={product} loading={loading}></Router>
			</Wrapper>
			<Footer></Footer>
		</>
		
	);
}

export default App;
