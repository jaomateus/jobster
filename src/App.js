import { Landing, Error, Register, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='register' element={<Register />} />
				<Route path='Dashboard' element={<Dashboard />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
