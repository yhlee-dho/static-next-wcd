declare module 'remark-html' {
	const html: any;
	export default html;
}

declare module '@tailwindcss/typography';
declare module '@tailwindcss/aspect-ratio';

declare module 'fs';
declare module 'classnames';

declare module 'to-vfile';
declare module 'remark-images';


declare module 'react-markdown';
declare module 'rehype-raw';
declare module 'rehype-sanitize';


import {
	IconDefinition,
	IconPrefix,
	IconName
} from '@fortawesome/fontawesome-common-types';
export const definition: IconDefinition;
export const faWindowClose: IconDefinition;
export const prefix: IconPrefix;
export const iconName: IconName;
export const width: number;
export const height: number;
export const ligatures: string[];
export const unicode: string;
export const svgPathData: string;