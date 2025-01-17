import Home from './components/home/Home';
import './App.css';
import SignUp from './components/auth/SignUp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					></Route>
					<Route
						path='/signup'
						element={<SignUp />}
					></Route>
					<Route
						path='/login'
						element={<Login />}
					></Route>
					<Route
						path='/home'
						element={<Home />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
