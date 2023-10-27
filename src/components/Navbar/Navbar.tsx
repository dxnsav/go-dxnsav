import Button from "../Button/Button"
import "./Navbar.css"

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="nav-header">shortie</h1>
			<Button text="Login" />
		</nav>
	)
}

export default Navbar
