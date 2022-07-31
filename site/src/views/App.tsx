import { useState } from 'react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {
	const [fun, setFun] = useState(false);
	return (
		<BrowserRouter>
			<Header />
			<Router />
		</BrowserRouter>
	);
}

export { App };
