import { Fragment, useState } from 'react';
import Container from 'components/container';

type HeaderProps = {
	props: string | number
};

const Header = ({ props }: HeaderProps) => {

	// const headerTop = (
	// 	<Container>
	// 		<div className={`bg-tailwindBlue`}>
	// 			<div className={`text-center`}>
	// 				<h1 className={`text4x1 font-extrabold tracking-tight text-white sm:text-5x1 lg:text-6x1`}>
	// 					Who needs online presence?
	// 				</h1>
	// 			</div>
	// 		</div>
	// 	</Container>
	// )

	const header = (
		<Container>
			<div className={`relative h-full`}>
				<div className={`absolute inset-0 w-full h-5/6 object-cover`}>
					{/* <img
						className={`w-full h-5/6 object-cover`}
						// src={`https://res.cloudinary.com/yongstal/image/upload/v1622155397/portfolio/18410_ymlums.jpg`}
						src={`#`}
						alt={``}
					/> */}

				</div>
				<div
						className={`absolute inset-0 bg-tailwindBlue mix-blend-multiply`}
						aria-hidden={`true`}
					/>
					<div className={`relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8`}>
					<h2 className={`text-4xl font-extrabold tracking-tight text-indigo-100 sm:text-5xl lg:text-6xl`}>Web applications that represent - </h2>
					<br></br>
					
					<p className={`mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-4xl`}>Customized to your vision</p>
					<li className={`max-w-xl mt-5 text-xl text-indigo-100`}>Your story begins with a vision</li>
					<li className={`max-w-xl mt-5 text-xl text-indigo-100`}>We bring complex ideas together with strategic design</li>
					<br></br>

					<p className={`mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-4xl`}>Built with the future in mind</p>
					<li className={`max-w-xl mt-5 text-xl text-indigo-100`}>Technology advances each day</li>
					<li className={`max-w-xl mt-5 text-xl text-indigo-100`}>We develop our websites with compatability in mind</li>
					<br></br>

					<a
						className={`mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lighterBlack bg-white hover:bg-indigo-50 sm:w-auto`}
						href={`/about`}
					>
						Our method explained.
					</a>

					</div>
			</div>
		</Container>
	)

	return (
		<Fragment>
			<span className={`container w-full min-w-full`}>
				{` `}
				{header}
			</span>
		</Fragment>
	);
};

export default Header;
