import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router/Router';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	min-height: 150px;
	padding-bottom: 150px;
`;

function App() {
	return (
		<>
			<div className="wrapper">
				<Header></Header>
				<Router></Router>
			</div>
			<Footer></Footer>
		</>
		
	);
}

export default App;
