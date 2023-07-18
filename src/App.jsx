import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import Film from "./page/Film"

const App = () => {
	return (
			<Routes>
				<Route path="/" element={<Home />} /> 
				<Route path="/Film" element={<Film />} />
			</Routes>
	)
}

export default App