import React from "react";
import "./header.css";
import nco_logo from "./nco_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<header>
				<div className="components__header">
					<Link to="/">
						<img
							src={nco_logo}
							alt="logo"
							className="components__header__logo"
						/>
					</Link>
					<nav className="components__header__menu">
						<ul>
							<li>
								<Link to="/company">会社情報</Link>
							</li>
							<li>
								<Link to="/product">商品情報</Link>
							</li>
							<li>
								<Link to="/recruit">採用情報</Link>
							</li>
							<li>
								<Link to="/news">ニュース</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
