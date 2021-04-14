import { Fragment, useState } from 'react';
import Link from 'next/link';
import Container from 'components/container';

interface NavRef {
	href: string;
	label: string;
}

type HeaderProps = {
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

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);

	// --- navlist link ---
	// const navlist = links.map(link => (
	// 	<li className='nav-item' key={`${link.href}-${link.label}`}>
	// 		<Link href={link.href}>
	// 			<a
	// 				className={`px-5 text-lg mx-auto md:px-5 md:mx-auto flex text-left 
	// 				md:text-center w-full h-full min-h-full md:text-2xl font-bold leading-loose md:leading-loose text-white
	// 				antialiased justify-center uppercase md:tracking-widest md:uppercase tracking-widest md:my-auto md:flex md:justify-start`}
	// 				aria-label={link.label}
	// 			>
	// 				&nbsp;{link.label}&nbsp;
	// 			</a>
	// 		</Link>
	// 	</li>
	// ));

	// --- nav window placement ---
	// const navPlacement = (
	// 	<div
	// 		className={
	// 			'md:flex md:mx-auto md:my-auto md:h-full md:w-full flex-grow flex-wrap' +
	// 			(navOpen ? ' flex bg-tailwindBlue opacity-90' : ' hidden')
	// 		}
	// 	>
	// 		{navOpen ? (
	// 			<div
	// 				className={`bg-transparent pb-4 leading-none h-full block flex-row flex-grow w-full text-xl text-center justify-center mx-auto my-auto uppercase text-white `}
	// 			>
	// 			<br />
	// 				<p className='tracking-widest mx-auto inline-flex min-w-full text-lg md:text-6xl mb-2 text-center justify-center px-5 antialiased '>
	// 					Mobile&nbsp;Nav
	// 				</p>
	// 			</div>
	// 		) : (
	// 			<div className='bg-transparent cursor-pointer flex flex-col flex-grow w-full text-1xl md:text-6xl text-center justify-center mx-auto my-0 uppercase text-white '>
	// 				<br />
	// 				<p className='mx-auto tracking-widest md:text-1x1 md:tracking-widest inline-flex px-auto min-w-full text-center justify-center antialiased '>
	// 						Desktop&nbsp;Nav					
	// 				</p>{' '}
	// 			</div>
	// 		)}
	// 		<div
	// 			className={
	// 				'flex my-auto md:my-auto w-full h-full md:min-w-full  md:w-full md:min-h-full md:h-full items-center align-text-right justify-center md:mx-auto md:justify-center'
	// 			}
	// 		>
	// 			<ul className='flex flex-col mx-auto md:flex md:mx-auto md:justify-center md:relative md:flex-row flex-grow align-text-top md:text-2xl list-none md:my-auto my-auto md:h-full'>
	// 				{navlist}
	// 			</ul>
	// 		</div>
	// 	</div>
	// );

	// --- nav height based on window height ---
	// const heightOnOpen = navOpen ? ' h-whole' : ' h-threeFifths';
	// const heightOnOpenSm = navOpen ? ' h-whole' : ' h-twoFifths';

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
										stroke-linecap={`round`}
										stroke-linejoin={`round`}
										stroke-width={`2`}
										d={`M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9`}
									/>
								</svg>
							</button>

							{/* <!-- Profile dropdown --> */}
							{/* <!--
								Dropdown menu, show/hide based on menu state.

								Entering: "transition ease-out duration-200"
									From: "transform opacity-0 scale-95"
									To: "transform opacity-100 scale-100"
								Leaving: "transition ease-in duration-75"
									From: "transform opacity-100 scale-100"
									To: "transform opacity-0 scale-95"
							-->	*/}

							{/* <div className={`ml-3 relative`}>
								<div>
									<button
										type={`button`}
										className={`bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
										id={`user-menu`}
										aria-expanded={`false`}
										aria-haspopup={`true`}
									>
										<span className={`sr-only`}>
											Open user menu
										</span>
										<img
											className={`h-8 w-8 rounded-full`}
											src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=rtjjYXLOwP&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
											alt={`alt`}
										/>
										<div
											className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
											role={`menu`}
											aria-orientation={`vertical`}
											aria-labelledby={`user-menu`}
										>
											<a
												href={`#`}
												className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
												role={`menuitem`}
											>
												User Profile
											</a>
            					<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
            					<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          					</div>
									</button>
								</div>
							</div> */}

							{/* MOBILE MENU BUTTON */}

							{/* <!-- Mobile menu, show/hide based on menu state. --> */}
							
						</div>
					</div>
				</div>
			</Container>
		</nav>
	);
	// const nav = (
	// 	<nav
	// 		className={`flex flex-row flex-wrap font-header xl:h-twoFifths lg:h-twoFifths md:h-threeFifths sm:${heightOnOpenSm} ${heightOnOpen} container overflow-y-hidden overflow-x-hidden -mx-5`}
	// 	>
	// 		<Container>
	// 			<div
	// 				className={`xl:h-twoFifths lg:h-twoFifths md:h-threeFifths sm:${heightOnOpenSm} ${heightOnOpen} transform duration-2000 absolute transition-all bg-opacity-10 bg-lighterBlack flex flex-row w-full bg-contain antialiased`}
	// 				style={{
	// 					backgroundImage: `url(https://res.cloudinary.com/yongstal/image/upload/v1614733230/portfolio/profile_top1C_av0f89.jpg)`,
	// 					backgroundRepeat: 'no-repeat',
	// 					backgroundSize: '100% 100%',
	// 					backgroundColor: 'black'
	// 				}}
	// 			>
	// 				<Container>
	// 					<div className='container block min-h-full h-full flex-grow my-auto px-4 justify-center w-full min-w-full items-center mx-auto md:my-auto md:block md:flex-grow md:mx-auto md:min-w-full md:w-full md:justify-center'>
	// 						<div className='flex w-full relative md:min-w-full md:mx-auto md:my-auto md:align-middle md:float-left justify-between md:w-full md:justify-center md:flex md:flex-row md:flex-grow mt-32'>
	// 							<button
	// 								className='text-white block mx-auto cursor-pointer pt-2 text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none'
	// 								type='button'
	// 								onClick={() => setNavOpen(!navOpen)}
	// 								name='open-nav-button'
	// 							>
	// 								{navOpen ? (
	// 									<a
	// 										aria-label='open-nav'
	// 										className='transition duration-1000 w-full'
	// 									>
	// 										<svg
	// 											fill='none'
	// 											viewBox='0 0 24 24'
	// 											className='h-8 w-8 transition transform rotate-180 duration-1000'
	// 										>
	// 											<path
	// 												d='M6 18L18 6M6 6L18 18'
	// 												strokeLinecap='round'
	// 												strokeLinejoin='round'
	// 												strokeWidth='3.5'
	// 												stroke='currentColor'
	// 											/>
	// 										</svg>
	// 									</a>
	// 								) : (
	// 									<a
	// 										aria-label='open-nav'
	// 										className='transition-colors delay-1000'
	// 									>
	// 										<svg
	// 											fill='none'
	// 											viewBox='0 0 24 24'
	// 											className='h-8 w-8 transform rotate-855 transition duration-1000'
	// 										>
	// 											<path
	// 												d='M6 18L18 6M6 6L18 18'
	// 												strokeLinecap='round'
	// 												strokeLinejoin='round'
	// 												strokeWidth='2.5'
	// 												stroke='currentColor'
	// 											/>
	// 										</svg>
	// 									</a>
	// 								)}
	// 							</button>
	// 						</div>
	// 						<div className='overflow-hidden'>
	// 							<Fragment>
	// 								{navPlacement}
	// 							</Fragment>
	// 						</div>
	// 					</div>
	// 				</Container>
	// 			</div>
	// 		</Container>
	// 	</nav>
	// );

	// --- Social Media buttons below nav ---
	// const subnav = (
	// 	<div className='text-xl transition delay-700 ease-in-out'>
	// 		{/* <SocialMediaIcons /> */}
	// 	</div>
	// );

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

export default Header;
