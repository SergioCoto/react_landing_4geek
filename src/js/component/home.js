import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</>
	);
}
