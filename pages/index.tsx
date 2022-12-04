import Head from "next/head";
import styled from "styled-components";
import { Button, Grid, Item, TextField } from "@mui/material";
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import Image from "next/image";

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
				<Grid container spacing={{ xs: 2, md: 6, lg: 10 }}>
					<Grid item xs={12} md={6} lg={4}>
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
					<Grid item xs={12} md={6} lg={8}>
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
					</Grid>
				</Grid>
			</Main>
		</div>
	);
}

const HeroButton = styled(Button)`
	border-radius: 2.5rem;
	margin-bottom: -50px;
`;

const HeroTextField = styled(TextField)`
	&& {
		width: 100%;
	}
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
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.2s ease-in-out;
	border-radius: 2.5rem;
	&:hover {
		background-color: ${({ theme }) => theme.colors.offWhite};
		background: linear-gradient(90deg, rgba(246,244,243,1) 0%, rgba(255,255,255,1) 69%, rgba(255,255,255,1) 100%);
	}
	&:active {
		background-color: ${({ theme }) => theme.colors.offWhite};
		background: linear-gradient(90deg, rgba(246,244,243,1) 0%, rgba(255,255,255,1) 69%, rgba(255,255,255,1) 100%);
	}
`;

const HeroHeader = styled.p`
	font-size: 3.5rem;
	color: ${(props) => props.theme.colors.characol};
	margin: 5rem 0 0.5rem 0;
`;

const HeroSlogan = styled.p`
	width: 75%;
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.characol};
`;

const Main = styled.main`
	margin: 0 2rem;
`;

const Hero = styled.div`
	width: 100%;
	background-color: white;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
	margin: 3rem 0;
	padding: 1rem 0;
	max-height: 80vh;
	justify-items: center;
	border-radius: 1rem;
`;

const HeroItem = styled.div`
	.anim {
		display: none;
	}
	&:hover {
		.anim {
			cursor: pointer;
			display: block;
		}
		> img {
			cursor: pointer;
			display: none;
		}
	}
`;
