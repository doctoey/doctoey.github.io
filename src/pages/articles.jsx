import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
// eslint-disable-next-line
import Article from "../components/articles/article";

import INFO from "../data/user";
// eslint-disable-next-line
import myArticles from "../data/articles";

import "./styles/articles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import cert1 from '../image/cert/cheewathun-lerttanapit-certificate-0.jpg'
import cert2 from '../image/cert/cheewathun-lerttanapit-certificate-1.png'
import cert3 from '../image/cert/cheewathun-lerttanapit-certificate-2.jpg'
import cert4 from '../image/cert/cheewathun-lerttanapit-certificate-3.jpg'
import cert5 from '../image/cert/cheewathun-lerttanapit-certificate-4.png'
import cert6 from '../image/cert/cheewathun-lerttanapit-certificate-9.png'
import cert7 from '../image/cert/cheewathun-lerttanapit-certificate-10.png'
import cert8 from '../image/cert/cheewathun-lerttanapit-certificate-15.png'
import cert9 from '../image/cert/cheewathun-lerttanapit-certificate-16.png'
import cert10 from '../image/cert/cheewathun-lerttanapit-certificate-18.jpg'
import cert11 from '../image/cert/cheewathun-lerttanapit-certificate-21.jpg'
import cert12 from '../image/cert/cheewathun-lerttanapit-certificate-24.jpg'
import cert13 from '../image/cert/cheewathun-lerttanapit-certificate-25.jpg'
import cert14 from '../image/cert/cheewathun-lerttanapit-certificate-30.jpg'
import cert15 from '../image/cert/cheewathun-lerttanapit-certificate-39.jpg'
import cert16 from '../image/cert/cheewathun-lerttanapit-certificate-41.jpg'
import cert17 from '../image/cert/cheewathun-lerttanapit-certificate-42.jpg'
import cert18 from '../image/cert/cheewathun-lerttanapit-certificate-43.jpg'
import cert19 from '../image/cert/cheewathun-lerttanapit-certificate-44.jpg'
import cert20 from '../image/cert/cheewathun-lerttanapit-certificate-45.jpg'

const Articles = () => {
	useEffect(() => {
		document.title = `Articles | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	const certificateImages = [
		cert1,
		cert2,
		cert3,
		cert4,
		cert5,
		cert6,
		cert7,
		cert8,
		cert9,
		cert10,
		cert11,
		cert12,
		cert13,
		cert14,
		cert15,
		cert16,
		cert17,
		cert18,
		cert19,
		cert20,
		// Add more certificate images here
	  ];

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div className="articles-container">
							<Swiper
								spaceBetween={20}
								slidesPerView={3}
								onSlideChange={() =>
									console.log("slide change")
								}
								onSwiper={(swiper) => console.log(swiper)}
								width={1200}
							>
								{certificateImages.map((image, index) => (
									<SwiperSlide key={index}>
										<img
											src={image}
											alt={`Certificate ${index + 1}`}
											className="certificate-image"
										/>
									</SwiperSlide>
								))}
							</Swiper>
							{/* <div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div> */}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
