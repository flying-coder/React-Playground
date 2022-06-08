import React from "react";
import "./intro.css";
import intro_image from "./intro-photo.png";

const Intro = () => {
	return (
		<>
			<div className="component__intro">
				<div className="component__intro__intro">
					<h3>
						オーガニック原料を中心とした製品で、肌本来の力を取り戻すお手伝いをします。
					</h3>
					<p>
						この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
					</p>
				</div>
				<div>
					<img id="component__intro__product" src={intro_image} alt="product" />
				</div>
			</div>
		</>
	);
};

export default Intro;
