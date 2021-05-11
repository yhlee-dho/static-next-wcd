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
		label: 'Home'
	},
	{
		href: '/services',
		label: 'Our Services'
	},
	{
		href: '/contact',
		label: 'Get in touch'
	}
];

const Nav = ({ props }: NavProps) => {

	// --- nav content and button for window expantion---
	const nav = (
		<nav className={`bg-white shadow`}>
			<Container>
				<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
					<div className={`flex justify-between h-16`}>
						<div className={`flex`}>
							<div className={`flex-shrink-0 flex items-center`}>
								<img className={`block lg:hidden h-8 w-auto`}
									src={`https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg`}
									alt={`Workflow`}
								/>
								<img className={`hidden lg:block h-8 w-auto`}
									src={`https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg`}
									alt={`Workflow`}
								/>
							</div>
							<div className={`hidden sm:ml-6 sm:flex sm:space-x-8`}>
								{/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
								<a href="/" className={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
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
								</a>
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
				</div>
			</Container>
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
