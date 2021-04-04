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

const links: NavRef[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/about',
		label: 'About'
	},
	{
		href: '/contact',
		label: 'Contact'
	}
];

const Header = ({ props }: HeaderProps) => {
	const [navOpen, setNavOpen] = useState(false);

	const navlist = links.map(link => (
		<li className='nav-item' key={`${link.href}-${link.label}`}>
			<Link href={link.href}>
				<a
					className={`px-5 text-lg mx-auto md:px-5 md:mx-auto flex text-left 
					md:text-center w-full h-full min-h-full md:text-2xl font-bold leading-loose md:leading-loose text-white
					antialiased justify-center uppercase md:tracking-widest md:uppercase tracking-widest md:my-auto md:flex md:justify-start`}
					aria-label={link.label}
				>
					&nbsp;{link.label}&nbsp;
				</a>
			</Link>
		</li>
	));

	const navPlacement = (
		<div
			className={
				'md:flex md:mx-auto md:my-auto md:h-full md:w-full flex-grow flex-wrap' +
				(navOpen ? ' flex bg-tailwindBlue opacity-90' : ' hidden')
			}
		>
			{navOpen ? (
				<div
					className={`bg-transparent pb-4 leading-none h-full block flex-row flex-grow w-full text-xl text-center justify-center mx-auto my-auto uppercase text-white `}
				>
				<br />
					
					<p className='tracking-widest mx-auto inline-flex min-w-full text-lg md:text-6xl mb-2 text-center justify-center px-5 antialiased '>
						Windy&nbsp;City&nbsp;Devs
					</p>
					
					<p className='my-1'>Windy City Devs</p>
				</div>
			) : (
				<div className='bg-transparent cursor-pointer flex flex-col flex-grow w-full text-1xl md:text-6xl text-center justify-center mx-auto my-0 uppercase text-white '>
					<br />

					<p className='mx-auto tracking-widest md:text-1x1 md:tracking-widest inline-flex px-auto min-w-full text-center justify-center antialiased '>
							Windy&nbsp;City&nbsp;Devs
							
					</p>{' '}

					<p className='md:text-3xl opacity-75 tracking-widest mx-auto inline-flex min-w-full text-2xl text-center justify-center px-5 antialiased transform transition-colors duration-1000'>
					Windy City Devs
					</p>
				</div>
			)}
			<div
				className={
					'flex my-auto md:my-auto w-full h-full md:min-w-full  md:w-full md:min-h-full md:h-full items-center align-text-right justify-center md:mx-auto md:justify-center'
				}

			>
				<ul className='flex flex-col mx-auto md:flex md:mx-auto md:justify-center md:relative md:flex-row flex-grow align-text-top md:text-2xl list-none md:my-auto my-auto md:h-full'>
					{navlist}
				</ul>
			</div>
		</div>
	);

	const heightOnOpen = navOpen ? ' h-whole' : ' h-threeFifths';
	const heightOnOpenSm = navOpen ? ' h-whole' : ' h-twoFifths';
	const pulseOnOpen = navOpen ? ' animate-none' : ' animate-pulse';

	const nav = (
		<nav
			className={`flex flex-row flex-wrap font-header xl:h-twoFifths lg:h-twoFifths md:h-threeFifths sm:${heightOnOpenSm} ${heightOnOpen} container overflow-y-hidden overflow-x-hidden -mx-5`}
		>
			<Container>
				<div
					className={`xl:h-twoFifths lg:h-twoFifths md:h-threeFifths sm:${heightOnOpenSm} ${heightOnOpen} transform duration-2000 absolute transition-all bg-opacity-10 ${!pulseOnOpen} bg-lighterBlack flex flex-row w-full bg-contain antialiased`}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/yongstal/image/upload/v1614733230/portfolio/profile_top1C_av0f89.jpg)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%',
						backgroundColor: 'black'
					}}
				>
					<Container>
						<div className='container block min-h-full h-full flex-grow my-auto px-4 justify-center w-full min-w-full items-center mx-auto md:my-auto md:block md:flex-grow md:mx-auto md:min-w-full md:w-full md:justify-center'>
							<div className='flex w-full relative md:min-w-full md:mx-auto md:my-auto md:align-middle md:float-left justify-between md:w-full md:justify-center md:flex md:flex-row md:flex-grow mt-32'>
								<button
									className='text-white block mx-auto cursor-pointer pt-2 text-xl leading-none transition-colors duration-1000 px-3 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none'
									type='button'
									onClick={() => setNavOpen(!navOpen)}
									name='open-nav-button'
								>
									{navOpen ? (
										<a
											aria-label='open-nav'
											className='transition duration-1000 w-full'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-8 w-8 transition transform rotate-180 duration-1000'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='3.5'
													stroke='currentColor'
												/>
											</svg>
										</a>
									) : (
										<a
											aria-label='open-nav'
											className='transition-colors delay-1000'
										>
											<svg
												fill='none'
												viewBox='0 0 24 24'
												className='h-8 w-8 transform rotate-855 transition duration-1000'
											>
												<path
													d='M6 18L18 6M6 6L18 18'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2.5'
													stroke='currentColor'
												/>
											</svg>
										</a>
									)}
								</button>
							</div>
							<div className='overflow-hidden'>
								<Fragment>
									{/* {logoT} removed for UI/UX testing */}
									{navPlacement}
									{/* {logoB} */}
								</Fragment>
							</div>
						</div>
					</Container>
				</div>
			</Container>
		</nav>
	);

	const subnav = (
		<div className='text-xl transition delay-700 ease-in-out'>
			{/* <SocialMediaIcons /> */}
		</div>
	);
	return (
		<Fragment>
			<div className='transform transition-all duration-1000 container w-full min-w-full'>
				{' '}
				{nav}
				{subnav}
			</div>
		</Fragment>
	);
};

export default Header;
