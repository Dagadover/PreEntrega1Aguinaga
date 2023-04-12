import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { CartWidget } from "../Components/CartWidget"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>BIG BOYS TOYS</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Todos los Productos</a>
				<a href="/#">Play Station</a>
				<a href="/#">Nintendo</a>
				<a href="/#">XBOX</a>
				<a href="/#"><CartWidget></CartWidget></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
