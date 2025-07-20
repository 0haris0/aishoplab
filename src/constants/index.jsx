import {SocialMediaProfiles} from '@/components/SocialMedia';


export const navigation = [
  {
    title: 'Work',
    links: [
      {
        title: 'AI-Powered E-Commerce Platform',
        href : '/work/ai-ecommerce',
      },
      {
        title: 'Next.js 15 Real-Time Dashboard',
        href : '/work/nextjs-dashboard',
      },
      {
        title: 'React Native Web3 Wallet',
        href : '/work/web3-wallet',
      },
      {
        title: (
            <>
              See all <span aria-hidden="true">&rarr;</span>
            </>
        ),
        href : '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'NexGen',
        href : '/nexgen',
      },
      {
        title: 'About',
        href : '/about',
      },
      {
        title: 'Process',
        href : '/process',
      },
      {
        title: 'Blog',
        href : '/blog',
      },
      {
        title: 'Contact us',
        href : '/contact',
      },
    ],
  },
  {
    title: 'Connect',
    links: SocialMediaProfiles,
  },
];
