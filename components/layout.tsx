import Header from './header';
import styled from 'styled-components';

export default function Layout({ children }) {
	return (
		<BodyComponent>
			<Header />
			<main>{children}</main>
		</BodyComponent>
	);
}

const BodyComponent = styled.div`
	background-color: ${(props) => props.theme.colors.cultured};
`;
