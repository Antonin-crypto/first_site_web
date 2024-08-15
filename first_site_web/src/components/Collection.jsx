import React from "react";
import Chicken from "./Chicken";

const Header = () => {
	return (
		<div>
			<Chicken img="https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG91bGV0fGVufDB8fDB8fHww" title="Poulet au marron" caption="Bien tendre avec la douceur des marrons"/>
			<Chicken img="https://plus.unsplash.com/premium_photo-1661767148942-32cf7f7c7f93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Poulet maison" caption="Une recette ultra simple"/>
			<Chicken img="https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG91bGV0fGVufDB8fDB8fHww" title="Hamburger" caption="Bien tendre avec la sauce"/>
		</div>
	);
};

export default Header;
