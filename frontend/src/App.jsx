import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Message from "./components/messages/Message";
import MessageContainer from "./components/messages/MessageContainer";
function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-10 h-screen flex items-center justify-center'>
			<Routes>
				{/* <Route path='*' element={<Navigate to='/Home' />} />
				 */}
				{/* just naviget to home for debug */}
				{/* <Route path= '/' element={<Navigate to='/Home' />} /> */}
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/message-box' element={<MessageContainer />} />

			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
