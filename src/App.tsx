import Navbar from './components/Navbar/Navbar';
import LinkShortener from './components/Shortener/Shortener';
import './App.css';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import { Link1Icon, CalendarIcon } from '@radix-ui/react-icons';
import ShortLinkContext from './context/ShortLinkContext';
import { useState } from 'react';
import QRCode from 'qrcode.react';

const App: React.FC = () => {
  const date = new Date();
  const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const [shortLink, setShortLink] = useState<string>('');

  return (
    <ShortLinkContext.Provider value={{ shortLink, setShortLink }}>
      <Navbar />
      <div className='mp-row'>
        <LinkShortener />
        <Container>
          <div className="c-row">
            <h2>QR code</h2>
            <Button text="Download PNG" />
          </div>
          <div className="c-row">
            {shortLink ? <QRCode value={shortLink} /> : <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com" alt="QR code" />}

            <div className='c-col qr-card'>
              <div className="c-row">
                <Link1Icon />
                <p className='qr-text'>https://www.google.com</p>
              </div>
              <div className="c-row">
                <CalendarIcon />
                <p className='qr-text'>{currentDate}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ShortLinkContext.Provider>
  );
}

export default App;
