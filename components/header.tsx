// make a header component with navigation links using material-ui
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "@mui/material";

export default function Header() {
	return (
		<Navbar>
			<Logo>
				<Link href="/">Binderr</Link>
			</Logo>
			<NavLinks>
				<Link href="/">Home</Link>
				<Link href="#features">Features</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</NavLinks>
			<UserActions>
				<LoginButton variant="contained">Login</LoginButton>
				<SignUpButton  variant="outlined">Sign Up</SignUpButton>
			</UserActions>
		</Navbar>
	);
}

// navbar with styled-components
const Navbar = styled.div`
	display: grid;
	grid-template-columns: 30% 53% 17%;
	width: 100%;
	padding: 1rem 2rem;
	background-color: ${(props) => props.theme.colors.white};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
`;

// logo with styled-components
const Logo = styled.div`
	font-size: 2.5rem;
	font-weight: bold;
	color: ${(props) => props.theme.colors.celticBlue};
`;

const NavLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 0 15%;
	color: ${(props) => props.theme.colors.spaceCadet};
	@media (max-width: 480px) {
		display: none;
	}
`;

const UserActions = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-evenly;
	align-items: center;
	grid-gap: 2.5rem;
	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

const LoginButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.celticBlue};
	color: ${(props) => props.theme.colors.white};
	border-radius: 1.5rem;
	box-shadow: 0;
	font-family: "Ubuntu", sans-serif;
	box-shadow: 0;
	font-size: .85rem;
	text-transform: none;
`;

const SignUpButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.celticBlue};
	border-radius: 1.5rem;
	box-shadow: 0;
	font-family: "Ubuntu", sans-serif;
	font-size: .85rem;
	text-transform: none;
`;
