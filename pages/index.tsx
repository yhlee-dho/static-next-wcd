import Nav from 'components/nav';
import Header from 'components/header';
import Layout from 'components/layout';

import Head from 'next/head';

import Container from 'components/container';
import Body from 'components/body';
import MoreCards from 'components/more-cards';

import { getAllPosts } from 'lib/api';
import { CMS_NAME } from 'lib/constants';
import Post from 'types/post';


type Props = {
	allPosts: Post[];
	props: string | number;
	preview?: boolean;
};

const Index = ({ allPosts, props, preview }: Props) => {
	const morePosts = allPosts.slice(0);

	return (
		<>
			<Nav props={props} />
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>Website made by {CMS_NAME}</title>
				</Head>
				<Container>
					<Body props={props} />
					{/* <div className={`max-w-5x1 mt-5 mb-5 grid mx-auto content-center justify-center items-center text-center`}>
						{morePosts.length > 0 && <MoreCards posts={morePosts} />}
					</div> */}
				</Container>
			</Layout>
		</>
	);
};

export default Index;

