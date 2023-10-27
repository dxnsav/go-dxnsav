import { createContext } from 'react';

interface ShortLinkContextType {
	shortLink: string;
	setShortLink: React.Dispatch<React.SetStateAction<string>>;
}

const ShortLinkContext = createContext<ShortLinkContextType | undefined>(undefined);

export default ShortLinkContext;
