import Header from 'components/header';
import Layout from 'components/layout';

import Head from 'next/head';

import Container from 'components/container';
import Intro from 'components/intro';

import { getAllPosts } from 'lib/api';
import { CMS_NAME } from 'lib/constants';
import Post from 'types/post';


type Props = {
	allPosts: Post[];
	props: string | number;
	preview?: boolean;
};

const Index = ({ allPosts, props, preview }: Props) => {

	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>Website made using {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro props={props} />
					
				</Container>
			</Layout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allPosts }
	};
};

