import Head from "next/head";
import styled from "styled-components";
import { Button, Grid, TextField } from "@mui/material";
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import Image from "next/image";
import Link from "next/link";
import Features from "../components/features";
import Modules from "../components/modules";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Binderr - All in one business</title>
				<meta
					name="description"
					content="All in one business software"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Main>
				<MainGrid container justifyContent="center" alignItems="center">
					<Grid item xs={12} md={6} lg={3}>
						<Hero>
							<HeroItem>
								<Image
									className="anim"
									src="/customer.gif"
									alt="Binderr"
									width={200}
									height={200}
								/>
								<Image
									src="/customer.png"
									alt="Binderr"
									width={200}
									height={200}
								/>
							</HeroItem>
							<HeroItem>
								<Image
									className="anim"
									src="/dollar.gif"
									alt="Binderr"
									width={200}
									height={200}
								/>
								<Image
									src="/dollar.png"
									alt="Binderr"
									width={200}
									height={200}
								/>
							</HeroItem>
							<HeroItem>
								<Image
									className="anim"
									src="/line-chart.gif"
									alt="Binderr"
									width={200}
									height={200}
								/>
								<Image
									src="/line-chart.png"
									alt="Binderr"
									width={200}
									height={200}
								/>
							</HeroItem>
							<HeroItem>
								<Image
									className="anim"
									src="/infographic.gif"
									alt="Binderr"
									width={200}
									height={200}
								/>
								<Image
									src="/infographic.png"
									alt="Binderr"
									width={200}
									height={200}
								/>
							</HeroItem>
						</Hero>
					</Grid>
					<RightGrid item xs={12} md={6} lg={9}>
						<HeroHeader>
							All in one <b>business</b> software
						</HeroHeader>
						<HeroSlogan>
							<b>Binderr</b> is a business software that helps you
							manage your business in one place.
						</HeroSlogan>
						<HeroSlogan>
							with <b>Binderr</b> you can manage your customers,
							invoices, expenses, and more.
						</HeroSlogan>
						<HeroBlock>
							<HeroBlockItem>
								<HeroTextField
									id="standard-basic"
									label="Email"
									variant="standard"
									color="primary"
									size="small"
								/>
							</HeroBlockItem>
							<HeroBlockItem>
								<HeroButton
									variant="text"
								>
								<ForwardToInboxOutlinedIcon /> &nbsp; Join Waitlist
								</HeroButton>
							</HeroBlockItem>
						</HeroBlock>
					</RightGrid>
					<WaitlistGrid item xs={12}>
						<h1>Join the waitlist to be the first one to know when we launch</h1>
					</WaitlistGrid>
				</MainGrid>
			</Main>
			<RestOfPage>
				<Features/>
				<Modules/>
			</RestOfPage>
		</div>
	);
}

const WaitlistGrid = styled(Grid)`
	@media (max-width: 1280px) {
		display: none;
	}
	h1 {
		width: 100%;
		color: ${({ theme }) => theme.colors.characol};
	}
`;

const RestOfPage = styled.div`
	width: 85%;
	margin: 0 auto;
	@media (max-width: 1280px) {
		width: 90%;
	}
`;

const RightGrid = styled(Grid)`
	padding: 2rem;
	@media (max-width: 1280px) {
		padding: 3rem;
	}
`;

const MainGrid = styled(Grid)`
	width: 85%;
	margin: 0 auto;
	@media (max-width: 1280px) {
		width: 100%;
	}
`;

const HeroButton = styled(Button)`
	border-radius: 2.5rem;
	margin-bottom: -50px;
`;

const HeroTextField = styled(TextField)`
	width: 100%;
`;

const HeroBlockItem = styled.div`
`;

const HeroBlock = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 1rem;
	padding: 2rem;
	@media (max-width: 1280px) {
		padding: 2rem;
	}
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.2s ease-in-out;
	border-radius: 2.5rem;
	:hover {
		background-color: ${({ theme }) => theme.colors.offWhite};
		background: linear-gradient(90deg, rgba(246,244,243,1) 0%, rgba(255,255,255,1) 69%, rgba(255,255,255,1) 100%);
	}
	:active {
		background-color: ${({ theme }) => theme.colors.offWhite};
		background: linear-gradient(90deg, rgba(246,244,243,1) 0%, rgba(255,255,255,1) 69%, rgba(255,255,255,1) 100%);
	}
`;

const HeroHeader = styled.p`
	font-size: 3.5rem;
	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
	@media (max-width: 1280px) {
		font-size: 2.5rem;
	}
	color: ${(props) => props.theme.colors.characol};
	margin: 1rem 0 0.5rem 0;
`;

const HeroSlogan = styled.p`
	width: 75%;
	font-size: 1.5rem;
	@media (max-width: 1280px) {
		font-size: 1.25rem;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
	color: ${(props) => props.theme.colors.characol};
`;

const Main = styled.main`
	width: 100%;
	background: url("/bg.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
	height: 100vh;
	@media (max-width: 1280px) {
		width: 90%;
	}
	margin: 2.5rem auto;
`;

const Hero = styled.div`
	width: 100%;
	background-color: white;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
	margin: 3rem 0;
	padding: 1rem 0;
	justify-items: center;
	border-radius: 1rem;
	@media (max-width: 768px) {
		padding: 0;
		grid-gap: 0;
		width: 90%;
		margin: 0 auto;
	}
`;

const HeroItem = styled.div`
	.anim {
		display: none;
	}
	:hover {
		.anim {
			cursor: pointer;
			display: block;
		}
		> img {
			cursor: pointer;
			display: none;
		}
	}
	@media (max-width: 1300px) {
		img {
			width: 150px;
			height: 150px;
		}
	}
`;
