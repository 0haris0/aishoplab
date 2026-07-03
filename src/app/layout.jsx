import RootLayout from '@/components/RootLayout';
import './globals.css';
import ReactGA from 'react-ga4';

export const metadata = {
  title: 'Ai Shop Lab | Shopify and Full-Stack Product Engineering',
  description:
    'Ai Shop Lab builds Shopify solutions, web applications, analytics platforms, and AI-assisted business workflows.',
  image: '/images/social.jpg',
  url: 'https://aishoplab.com',
  type: 'website',
  keywords: [
    'Shopify app development',
    'full-stack development',
    'AI product optimization',
    'e-commerce software',
    'web application development',
  ],
};

export default function Layout({children}) {
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
