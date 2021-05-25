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
	const navList = links.map(link => (
		<li className={`nav-item`} key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className={`items-center opacity-100 text-3x1 md:text-3x1 mx-auto md:mx-auto my-auto md:my-auto 
											px-10 md:px-10 md:text-center
											w-full h-2 hover:text-tailwindBlue
											font-bold leading-loose md:leading-loose
											text-lighterBlack hover:opacity-75 antialiased
											transform transition-all duration-1000 justify-center
											tracking-wide md:tracking-wide md:flex md:justify-center
											font-menu`}
					aria-label={link.label}
				>
					&nbsp;{link.label}&nbsp;
				</a>
			</Link>
		</li>
	));
	// const navPlacement = window.onscroll()
	// --- nav content and button for window expansion---
	const nav = (
		<nav className={`bg-blizzardBlue`}>
			<div className={`w-full mx-auto px-4 sm:px-6 lg:px-8`}>
				<div className={`transform duration-2000 w-full justify-between h-oneTenth`}>
					<div className={`flex`}>
						<div className={`flex-shrink-0 flex items-center`}>
							<img className={`block h-oneTwentieth w-auto `}
								src={`https://res.cloudinary.com/yongstal/image/upload/v1621891514/portfolio/wcd-logo_zp1rqq.svg`}
								alt={`WindyCityDevs`}
							/>
						</div>
						<div className={`sm:ml-6 sm:flex`}>
							<ul className={`flex md:flex md:mx-auto mx-auto md:my-auto my-auto`}>
								{navList}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);

// --- render nav ---
	return (
		<Fragment>
			<div className='transform transition-all duration-1000 w-full min-w-full'>
				{' '}
				{nav}
				{/* {subnav} */}
			</div>
		</Fragment>
	);
};

export default Nav;
