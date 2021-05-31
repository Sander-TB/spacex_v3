import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className='nav'>
			<Link to='/' className='logo-container'>
				<img src={Logo} alt='Space X Logo' />
			</Link>
			<IoMenuOutline className='nav-btn' />
			<div className='nav-menu'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/technologies'>Technologies</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</nav>
	);
}