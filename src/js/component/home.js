import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card1 } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card1 />
			<Card1 />
			<Card1 />
			<Footer />
		</>
	);
}
