import React from "react";
import "./hero.css";
import hero_image from "./hero-image.jpg";

const Hero = () => {
	return (
		<>
			<div className="components__hero">
				<h2 className="components__hero__subtitle">INSIDE OUT</h2>
				<h1 className="components__hero__title">
					内と外から、未来の美しいを創ります
				</h1>
				<img id="components__hero__plant" src={hero_image} alt="plant" />
			</div>
		</>
	);
};

export default Hero;
