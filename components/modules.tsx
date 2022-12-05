import styled from 'styled-components';

export default function Modules() {
	return (
		<ModulesDiv>
			<h3>Packed with Modules</h3>
			<h2>Binderr comes with a ton of features out of the box</h2>
			<br />
			<br />
			<ModulesGrid>
				<ModulesCard>
					<h4>Dashboard</h4>
					<p>
						Binderr comes with a beautiful dashboard that is easy to use and understand.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Sales</h4>
					<p>
						Manage your quotes, invoices, payments, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>CRM</h4>
					<p>
						Manage your customers, leads, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Projects</h4>
					<p>
						Manage your projects, tasks, and everything else.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Products</h4>
					<p>
						Manage your products, inventory, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Expenses</h4>
					<p>
						Manage your expenses, receipts, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Time Tracking</h4>
					<p>
						Manage your time, tasks, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Documents</h4>
					<p>
						Manage your documents, files, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Staff</h4>
					<p>
						Manage your team, roles, and more.
					</p>
				</ModulesCard>
				<ModulesCard>
					<h4>Settings</h4>
					<p>
						Manage your settings, users, and more.
					</p>
				</ModulesCard>
			</ModulesGrid>
		</ModulesDiv>
	);
}


const ModulesCard = styled.div`
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
		transform: translateY(-5px);
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

const ModulesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 2rem;
	padding: 2rem;
`;

const ModulesDiv = styled.div`
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

