// make a header component with navigation links using material-ui
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
	return (
		<Navbar>
			<Logo>
				<Link href="/">Binderr</Link>
			</Logo>
			<NavLinks>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/login">Login</Link>
				<Link href="/signup">Sign Up</Link>
			</NavLinks>
		</Navbar>
	);
}

// navbar with styled-components
const Navbar = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	width: 100%;
	padding: 1rem 2rem;
	background-color: ${(props) => props.theme.colors.cultured};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// logo with styled-components
const Logo = styled.div`
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.celticBlue};
`;

const NavLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
