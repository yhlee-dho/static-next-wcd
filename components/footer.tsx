import Container from 'components/container';
import { EXAMPLE_PATH } from 'lib/constants';

const Footer = () => {
	return (
		<footer className='bg-blizzardBlue' aria-labelledby={`footerHeading`}>
			<Container>
				<h2 id={`footerHeading`} className={`sr-only`}>
					Footer
				</h2>
				<div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8`}>
					<div className={`xl:grid xl:grid-cols-3 xl:gap-8`}>
						<div className={`space-y-8 xl:col-span-1`}>
							{/* logo here */}
							<img className={`h-10`} src={`https://tailwindui.com/img/logos/workflow-mark-gray-300.svg`} alt={`Windy City Devs`} />
							<p className={`text-gray-500 text-base`}>
								Making the world a better place through constructing elegant hierarchies.
							</p>
							{/* Social Media icons here */}
							<div className={`flex space-x-6`}>
								<a href={`#`} className={`text-gray-400 hover:text-gray-500`}>
									<span className={`sr-only`}>Facebook</span>
									<svg className={`h-6 w-6`} fill={`currentColor`} viewBox={`0 0 24 24`} aria-hidden={`true`}>
										<path fillRule={`evenodd`} d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`}
											clipRule={`evenodd`} />
									</svg>
								</a>
								<a href={`#`} className={`text-gray-400 hover:text-gray-500`}>
									<span className={`sr-only`}>Github</span>
									<svg className={`h-6 w-6`} fill={`currentColor`} viewBox={`0 0 24 24`} aria-hidden={`true`}>
										<path fillRule={`evenodd`} d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`}
											clipRule={`evenodd`} />
									</svg>
								</a>
								<a href={`#`} className={`text-gray-400 hover:text-gray-500`}>
									<span className={`sr-only`}>LinkedIn</span>
									<svg className={`h-6 w-6`} fill={`currentColor`} viewBox={`0 0 24 24`} aria-hidden={`true`}>
										<path fillRule={`evenodd`} d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`}
											clipRule={`evenodd`} />
									</svg>
								</a>

							</div>
						</div>
						<div className={`mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2`}>
        			<div className={`md:grid md:grid-cols-2 md:gap-8`}>
          			<div>
            			<h3 className={`text-sm font-semibold text-gray-400 tracking-wider uppercase`}>
              			Solutions
            			</h3>
            			<ul className={`mt-4 space-y-4`}>
              			<li>
                			<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
                  			Marketing
                			</a>
              			</li>
              			<li>
                			<a href={`#`}className={`text-base text-gray-500 hover:text-gray-900`}>
                  			Analytics
               			  </a>
              			</li>
              			<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Commerce
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Insights
											</a>
										</li>
									</ul>
								</div>
								<div className={`mt-12 md:mt-0`}>
									<h3 className={`text-sm font-semibold text-gray-400 tracking-wider uppercase`}>
										Support
									</h3>
									<ul className={`mt-4 space-y-4`}>
										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Pricing
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Documentation
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Guides
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												API Status
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={`md:grid md:grid-cols-2 md:gap-8`}>
								<div>
									<h3 className={`text-sm font-semibold text-gray-400 tracking-wider uppercase`}>
										Company
									</h3>
									<ul className={`mt-4 space-y-4`}>
										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												About
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Blog
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Jobs
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Press
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Partners
											</a>
										</li>
									</ul>
								</div>
								<div className={`mt-12 md:mt-0`}>
									<h3 className={`text-sm font-semibold text-gray-400 tracking-wider uppercase`}>
										Legal
									</h3>
									<ul className={`mt-4 space-y-4`}>
										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Claim
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Privacy
											</a>
										</li>

										<li>
											<a href={`#`} className={`text-base text-gray-500 hover:text-gray-900`}>
												Terms
											</a>
										</li>
									</ul>
								</div>
        </div>
      </div>
					</div>
					
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
