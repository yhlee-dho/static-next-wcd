import { CMS_NAME, CMS_URL } from 'lib/constants';

interface SortRef {
	href: string;
	label: string;
}

const links: SortRef[] = [
	{
		href: '/',
		label: 'Title Ascending'
	},
	{
		href: '/reverse-alphabetical',
		label: 'Title Descending'
	},
	{
		href: '/newest',
		label: 'Date Newest'
	},
	{
		href: '/oldest',
		label: 'Date Oldest'
	}
];



interface IntroProps {
	props: string | number;
}

export default function Intro({ props }: IntroProps) {
	
	return (
		<div className='mb-10'>

		
		</div>
	);
}
