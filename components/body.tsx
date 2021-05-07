import { Fragment, useState } from 'react';
import Container from 'components/container';

type BodyProps = {
	props: string | number
};

const Body = ({ props }: BodyProps) => {

	const body = (
		<Container>
			<div className={`relative bg-white pt-16 pb-32 overflow-hidden`}>
				<div className={`relative`}>
					<div className={`lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24`}>
						<div className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0`}>
							<div>
								<div>
									<span className={`h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600`}>
										<svg className={`h-6 w-6 text-white`} xmlns={`http://www.w3.org/2000/svg`} fill={`none`} viewBox={`0 0 24 24`} stroke={``} aria-hidden={`true`}>
                  		<path stroke-linecap={`round`} stroke-linejoin={`round`} stroke-width={`2`} d={`M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4`} />
										</svg>
									</span>
								</div>
								<div className={`mt-6`}>
									<h2 className={`text-3xl font-extrabold tracking-tight text-gray-900`}>
										Stay on top of customer support
									</h2>
									<p className={`mt-4 text-lg text-gray-500`}>
										Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.
									</p>
									<div className={`mt-6`}>
										<a href={`#`} className={`inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indige-600 hover:bg-indigo-700`}>
											Get started
										</a>
									</div>
								</div>
							</div>
							<div className={`mt-8 border-t border-gray-200 pt-6`}>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)

	return (
		<Fragment>
			<div className={`container w-full min-w-full`}>
				{` `}
				{body}
			</div>
		</Fragment>
	);
};

export default Body;
