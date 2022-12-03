import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		celticBlue: "#276FBF",
		cultured: "#F6F4F3",
		spaceCadet: "#183059",
		middleRed: "#AF5B5B",
		salsa: "#F03A47",
		white: "#FFFFFF",
		offWhite: "#F6F4F3",
	},
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
