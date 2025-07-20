import {SocialMediaProfiles} from '@/components/SocialMedia';


export const navigation = [
  {
    title: 'Work',
    links: [
      {
        title: 'AI-Powered E-commerce Platform',
        href : '/work/ai-ecommerce',
      },
      {
        title: 'DeFi Yield Farming Dashboard',
        href : '/work/defi-dashboard',
      },
      {
        title: 'Real-time Collaborative Editor',
        href : '/work/collaborative-editor',
      },
      {
        title: 'NFT Marketplace with Web3',
        href : '/work/nft-marketplace',
      },
      {
        title: 'Edge Computing IoT Platform',
        href : '/work/iot-platform',
      },
      {
        title: 'Metaverse Social Network',
        href : '/work/metaverse-social',
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
