import { Fragment, useState } from 'react';
import Link from 'next/link';
import Container from 'components/container';

interface NavRef {
	href: string;
	label: string;
}

type NavProps = {
	props: string | number;
};

// nav references
const links: NavRef[] = [
	{
		href: '/',
		label: 'What We Do'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/projects',
		label: 'Projects'
	},
	{
		href: '/contact',
		label: 'Get in touch'
	}
];

const Nav = ({ props }: NavProps) => {
	const navlist = links.map(link => (
		<li className={`nav-item`} key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className={`px-5 opacity-100 text-lg mx-auto md:px-5 md:mx-auto md:text-center md:text-2x1 flex-left w-full h-full min-h-full hover:bg-tailwindBlue border-b-2 border-blizzardBlue font-bold leading-loose md:leading-loose text-oneFiveBlack hover:opacity-75 antialiased transform transition-all duration-1000 justify-center tracking-widest uppercase md:tracking-widest md:uppercase md:my-auto md:flex md:justify-start`}
					aria-label={link.label}
				>
					&nbsp;{link.label}&nbsp;
				</a>
			</Link>
		</li>
	));

	// --- nav content and button for window expansion---
	const nav = (
		<nav className={`flex flex-row flex-wrap font-polished xl:h-oneSixth md:h-oneFifths sm:h-oneFourth container overflow-y-hidden overflow-x-hidden -mx-5`}>
				{/* <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}> */}
				<div
					className={`xl:h-oneSixth lg:h-oneSixth md:h-oneFifths sm:oneFifths transform duration-2000 absolute transition-all bg-opacity-10 bg-blizzardBlue flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
					}}
				>
					<Container>
						<div className={`flex justify-between h-oneSixth text-1x1`}>
							<div className={`flex`}>
								<div className={`flex-shrink-0 flex items-center`}>
									<img className={`block h-oneTenth w-auto`}
										src={`https://res.cloudinary.com/yongstal/image/upload/v1621891514/portfolio/wcd-logo_zp1rqq.svg`}
										alt={`WindyCityDevs`}
									/>
								</div>
								<div className={`flex my-auto md:my-auto w-full h-full`}>
									{/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
									{/* <a href="/" className={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
										What We Do
									</a>
									<a href="/about" className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
										About
									</a>
									<a href="/projects" className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
										Projects
									</a>
									<a href="/contact" className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
										Contact
									</a> */}
									<ul className={`flex flex-col mx-auto md:flex md:mx-auto md:justify-center md:relative md:flex-row flex-grow md:text-2x1 list-none md:my-auto my-auto md:h-full`}>
										{navlist}
									</ul>
								</div>
							</div>
							<div className={`hidden sm:ml-6 sm:flex sm:items-center`}>
								<button className={`bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
									<span className={`sr-only`}>
										View Notifications
									</span>

									{/* <!-- Heroicon name: outline/bell --> */}
									<svg
										className={`h-6 w-6`}
										xmlns={`http://www.w3.org/2000/svg`}
										fill={`none`}
										viewBox={`0 0 24 24`}
										stroke={`currentColor`}
										aria-hidden={`true`}
									>
										<path
											strokeLinecap={`round`}
											strokeLinejoin={`round`}
											strokeWidth={`2`}
											d={`M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9`}
										/>
									</svg>
								</button>

								
							</div>
						</div>
					</Container>

				</div>
		</nav>
	);

// --- render nav ---
	return (
		<Fragment>
			<div className='transform transition-all duration-1000 container w-full min-w-full'>
				{' '}
				{nav}
				{/* {subnav} */}
			</div>
		</Fragment>
	);
};

export default Nav;
