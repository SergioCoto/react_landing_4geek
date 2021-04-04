import React from "react";
import { Card } from "./card.js";

export const Cards = () => {
	return (
		<div className="row row-cols-1 row-cols-md-4">
			<Card
				title="Card title1"
				imageUrl="http://animalesmascotas.com/wp-content/uploads/2013/04/animales-marinos-tortuga-e1382707876346.jpg"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis mi gravida, dapibus mauris in, vestibulum ipsum."
				buttonUrl="#"
			/>
			<Card
				title="Card title2"
				imageUrl="https://www.elagoradiario.com/wp-content/uploads/2019/06/Vaquita-Marina.jpg"
				description="Nam posuere ut augue ut egestas. Fusce egestas mattis faucibus. Duis interdum accumsan tortor, faucibus accumsan dui venenatis nec."
				buttonUrl="#"
			/>
			<Card
				title="Card title3"
				imageUrl="https://www.fundacionaquae.org/wp-content/uploads/2019/07/especies-marinas-caballito-de-mar-1024x768.jpg"
				description="Morbi pellentesque pulvinar urna quis lacinia. In hac habitasse platea dictumst. Curabitur a nisl nec quam tempus vestibulum."
				buttonUrl="#"
			/>
			<Card
				title="Card title4"
				imageUrl="https://sfo2.digitaloceanspaces.com/elpaiscr/2019/05/tiburonmartillo.jpg"
				description="Vestibulum eu laoreet lacus. Phasellus egestas sodales nibh non pretium."
				buttonUrl="#"
			/>
		</div>
	);
};
