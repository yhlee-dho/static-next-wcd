import { Fragment, useState } from 'react';
import Container from 'components/container';

type HeaderProps = {
	props: string | number
};

const Header = ({ props }: HeaderProps) => {

	const header = (
		<Container>
			<div className={`bg-white`}>
				<div className={`max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8`}>
					<div className={`text-left`}>
						<h2 className={`text-base font-semibold text-indigo-600 tracking-wide uppercase underline`}>Web applications</h2>
						<p className={`mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl`}>Customized web applications.</p>
						<li className={`max-w-xl mt-5 text-xl text-gray-700`}>Windy City Devs builds software and assist clients with technical solutions.</li>
						<li className={`max-w-xl mt-5 text-xl text-gray-700`}>We bring complex ideas together with strategic design and development.</li>
						{/* <li className={`max-w-xl mt-5 mx-auto text-xl text-gray-700`}>Our method explained.</li> */}

					</div>
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
