import RootLayout from '@/components/RootLayout';
import './globals.css';
import ReactGA from 'react-ga4';


export const metadata = {
  title      : 'Studio',
  description: 'We are a group of developer working at the intersection of design and technology.',
  image      : '/images/social.jpg',
  url        : 'https://aishoplab.com',
  type       : 'website',
  keywords   : ['design', 'technology', 'studio'],
};

export default function Layout({children})
  {

  ReactGA.initialize('G-5FCRRZPEDL');
  return (
      <html
          lang="en"
          className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
      >
      <body className="flex min-h-full flex-col">
      <RootLayout>{children}</RootLayout>
      </body>
      </html>
  );
  }
