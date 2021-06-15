import Nav from 'components/nav';
import Header from 'components/header';
import Layout from 'components/layout';

import Head from 'next/head';

import Container from 'components/container';
import Blog from 'components/blog';
import Testimonial from 'components/testimonial';

import { CMS_NAME } from 'lib/constants';
import Post from 'types/post';


type Props = {
	props: string|number;
	preview?: boolean;
};

const Index = ({ props, preview }: Props) => {

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Website made by {CMS_NAME}</title>
				</Head>

				{/* sticky nav */}
				<div className={`sticky top-0 z-50`}>
						<Nav props={props}/>
				</div>
				<Container>
					<Header props={props} />

					{/* tech introduction - blog format */}
					{/* tech stack articles */}
					<Blog props={props} />

					{/* testimonials */}
					<Testimonial props={props} />

					{/* business partners */}
					
					{/* past projects */}
					{/* project cards */}
					


				</Container>
			</Layout>
		</>
	);
};

export default Index;

