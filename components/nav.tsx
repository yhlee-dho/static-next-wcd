import { Fragment, useState } from 'react';
import Link from 'next/link';
import Container from 'components/container';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

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
					className={`border-transparent text-oneFiveBlack hover:border-tailwindBlue hover:text-tailwindBlue
											block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
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
		<Disclosure as={`nav`} className={`bg-blizzardBlue`}>
			{({ open }) => (
				<>
					<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
						<div className={`flex justify-between h-16`}>
							<div className={`flex`}>
								<div className={`-ml-2 mr-2 flex items-center md:hidden`}>

									{/* Mobile menu button */}
									<Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}>
										<span className={`sr-only`}>
											&nbsp;Menu&nbsp;
										</span>
										{open ? (
											<XIcon
												className={`block h-6 w-6`}
												aria-hidden={`true`}
											/>
										) : (
											<MenuIcon
												className={`block h-6 w-6`}
												aria-hidden={`true`}
											/>
										)}
									</Disclosure.Button>
								</div>

								{/* Logo image Here */}
								<div className={`flex-shrink-0 flex items-center`}>
									<img
										className={`block h-8 w-auto`}
										src={`https://res.cloudinary.com/yongstal/image/upload/v1621891514/portfolio/wcd-logo_zp1rqq.svg`}
										alt={`WindyCityDevs`}
									/>
								</div>

								{/* md view Nav Links */}
								<div className={`hidden md:ml-6 md:flex md:space-x-8`}>
									<ul className={`md:flex md:mx-auto md:my-auto`}>
										{navList}
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* lg view Nav Links */}
					<Disclosure.Panel className={`md:hidden`}>
						<div className={`pt-2 pb-3 space-y-1`}>
							<ul className={`flex mx-auto my-auto`}>
										{navList}
							</ul>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
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
