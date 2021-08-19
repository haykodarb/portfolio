import "../styles/global.css";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title="Hayk Darbinyan"
				description="Hayk Darbinyan - Embedded and Software Engineer."
			/>
			<Component {...pageProps} />
		</>
	);
}
