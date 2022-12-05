import React from 'react';
import styled from 'styled-components';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';

export default function Features() {
	return (
		<FeatureDiv id='features'>
			<h3>Why Binderr ?</h3>
			<h2>Specailly designed for accessibility, collaboration and performance</h2>
			<br />
			<br />
			<FeaturesGrid>
				<FeatureCard>
					<MobileFriendlyIcon sx={{ fontSize:40 }} />
					<h4>Mobile Friendly UI</h4>
					<p>
					A mobile-friendly user interface makes the entire experience easy and intuitive so that even if they're not in front of their computer, they can complete tasks quickly and easily.
					</p>
				</FeatureCard>
				<FeatureCard>
					<WorkspacesOutlinedIcon sx={{ fontSize:40 }} />
					<h4>Collaborative Workspaces</h4>
					<p>
					Binderr's collaborative workspaces allow you to work with your team on the same forms and projects at the same time. You can also share files and documents with your team members.
					</p>
				</FeatureCard>
				<FeatureCard>
					<SpeedOutlinedIcon sx={{ fontSize:40 }} />
					<h4>High Performance</h4>
					<p>
					Binderr is built with the latest technologies to ensure that your business processes are always running fast and responsive. You can also use our API to integrate Binderr with your existing systems.
					</p>
				</FeatureCard>
			</FeaturesGrid>
			<br />
			<br />
		</FeatureDiv>
   );
}


const FeatureCard = styled.div`
	width: 100%;
	border-radius: 5px;
	border: 1px solid #eaeaea;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
		svg * {
			fill: ${(props) => props.theme.colors.spaceCadet};
		}
		border: 1px solid ${(props) => props.theme.colors.spaceCadet};
		p {
			color: ${(props) => props.theme.colors.characol};
		}
	}
	h4 {
		font-weight: bold;
	}
	p {
		line-height: 1.75;
	}
`;

const FeaturesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const Hr = styled.hr`
	border: 1px solid #e0e0e0;
`;

const FeatureDiv = styled.div`
	text-align: center;
	h3 {
		color: ${({ theme }) => theme.colors.celticBlue};
		font-weight: 400;
	}
	h2 {
		width: 450px;
		margin: 0 auto;
	}
`;

const BoldBinderr = styled.span`
	font-weight: 700;
	color: ${({ theme }) => theme.colors.characol};
	:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.celticBlue};
	}
`;
