import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router/Router';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	min-height: 100%;
	padding-bottom: 150px;
`;

function App() {
	return (
		<>
			<Wrapper>
				<Header></Header>
				<Router></Router>
			</Wrapper>
			<Footer></Footer>
		</>
		
	);
}

export default App;
