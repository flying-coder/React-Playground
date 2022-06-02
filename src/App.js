import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import HomePage from "./components/HomePage";
import CompanyPage from "./components/CompanyPage";
import ProductPage from "./components/ProductPage";
import RecruitPage from "./components/RecruitPage";
import NewsPage from "./components/NewsPage";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<Hero />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/company" element={<CompanyPage />} />
					<Route path="/product" element={<ProductPage />} />
					<Route path="/recruit" element={<RecruitPage />} />
					<Route path="/news" element={<NewsPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
