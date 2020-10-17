import React from 'react';
import { Link } from 'wouter'
import "./Navbar..css"

const Navbar = () => {
	return (
		<nav className="navbar navbar-custom navbar-expand-lg navbar-dark fixed-top navbarCustom">
			<Link className="navbar-brand" to="#">
				<img className="logo" src="/img/superfly-07.png" alt="Superfly Fitness"/> 
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto" style={{"marginRight": "19%"}}>
					<li className="nav-item ml-4">
						<a className="nav-link" href="#aboutme" >
							About me
						</a>
					</li>
					<li className="nav-item ml-4">
						<a className="nav-link" href="#premium">
							Premium
						</a>
					</li>
					<li className="nav-item ml-4">
						<a className="nav-link" href="#contact">
							Contact
						</a>
					</li>
					<li className="nav-item ml-4">
						<Link className="nav-link" to="/videos">
							Videos
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link ml-4">
							Sign Up
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link ml-4">
							Sign In
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
