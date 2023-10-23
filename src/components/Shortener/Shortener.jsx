import { useContext, useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import './Shortener.css';
import ShortLinkContext from '../../context/ShortLinkContext';

const Shortener = () => {
	const [link, setLink] = useState('');
  const {shortLink, setShortLink} = useContext(ShortLinkContext);

  const shortenLink = async () => {
    try {
      const response = await axios.post('https://api.short.io/links/public', {
        domain: import.meta.env.VITE_DOMAIN,
        originalURL: link,
        allowDuplicates: false
      }, {
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'Authorization': import.meta.env.VITE_API_KEY
        }
      });

      setShortLink(response.data.shortURL);
      setLink('');
    } catch (error) {
      console.error("Error shortening the link:", error);
    }
  };

	return (
		<div className='shortener'>
			<h1 className="message">Shorten your link</h1>
			<div className='box-link'>
				<input
					name="text"
					type="url"
					value={link}
					onInput={e => setLink(e.target.value)}
					placeholder="Paste a URL to shorten"
					className='input'
				/>
				<Button
					type="submit"
					disabled={!link.length}
					onClick={shortenLink}
					text='Ceate link'
				/>
			</div>
			<p>{shortLink ? `Your short link is ${shortLink}` : ''}</p>
		</div>
	)
}

export default Shortener
