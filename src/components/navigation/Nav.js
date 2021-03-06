import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	let burgerMenu;

	if (showMenu) {
		burgerMenu = (
			<div className='mav-mobile'>
				<Link to='/' onClick={() => setShowMenu(!showMenu)}>
					Home
				</Link>
				<Link to='/about' onClick={() => setShowMenu(!showMenu)}>
					About
				</Link>
				<Link to='/history' onClick={() => setShowMenu(!showMenu)}>
					History
				</Link>
				<Link to='/roadster' onClick={() => setShowMenu(!showMenu)}>
					Roadster
				</Link>
				<Link to='/dragons' onClick={() => setShowMenu(!showMenu)}>
					Dragons
				</Link>
				<Link to='/rockets' onClick={() => setShowMenu(!showMenu)}>
					Rockets
				</Link>
			</div>
		);
	}

	return (
		<>
			<nav className='nav'>
				<Link to='/' className='logo-container'>
					<img src={Logo} alt='Space X Logo' />
				</Link>
				<IoMenuOutline
					onClick={() => setShowMenu(!showMenu)}
					className='nav-btn'
				/>
				<div className='nav-menu'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/history'>History</Link>
					<Link to='/roadster'>Roadster</Link>
					<Link to='/dragons'>Dragons</Link>
					<Link to='/rockets'>Rockets</Link>
				</div>
			</nav>
			{burgerMenu}
		</>
	);
}
