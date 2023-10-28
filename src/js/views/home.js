import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Starship } from "../component/starships";

export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
		<Planets />
		<Starship />
	</div>
);
