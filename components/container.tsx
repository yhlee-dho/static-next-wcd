import { ReactNode, FC } from 'react';

type Props = {
	children?: ReactNode;
};

const Container: FC = ({ children }: Props) => {
	return <div className='container mx-auto px-5 bg-blizzardBlue'>{children}</div>;
};

export default Container;
