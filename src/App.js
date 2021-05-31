import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import History from "./components/History/History";
import Roadster from "./components/Roadster/Roadster";
import Dragons from "./components/Dragons/Dragons";
import Rockets from "./components/Rockets/Rockets";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/history'>
					<History />
				</Route>
				<Route path='/roadster'>
					<Roadster />
				</Route>
				<Route path='/dragons'>
					<Dragons />
				</Route>
				<Route path='/rockets'>
					<Rockets />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
