import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router/Router';

function App() {
	return (
		<div className="wrapper">
			<Header></Header>
			<Router></Router>
			<Footer></Footer>
		</div>
	);
}

export default App;
