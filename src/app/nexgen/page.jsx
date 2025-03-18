'use client';

import NexGenPricing from '@/components/NexGenPricing';
import Blog from '@/components/Blog';
import Accordion from '@/components/Accordion';


const accordionItems = [
  {
    title  : 'What does NexGen do?',
    content: 'NexGen enhances your Shopify product listings using AI, optimizing titles, descriptions, images, and SEO to increase sales and visibility.',
  },
  {
    title  : 'How does NexGen improve my store?',
    content: 'It analyzes your products, identifies missing information, suggests improvements, and provides market insights for better pricing and positioning.',
  },
  {
    title  : 'Can NexGen help with pricing strategies?',
    content: 'Yes! NexGen compares your products with marketplace data to suggest competitive pricing strategies based on trends and demand.',
  },
  {
    title  : 'How does NexGen compare my products to competitors?',
    content: 'NexGen scrapes marketplace data to compare prices, reviews, and trends, helping you position your products strategically.',
  },
  {
    title  : 'Is AI-generated content customizable?',
    content: 'Yes, you can review and modify AI suggestions before applying them to ensure they align with your brand’s voice.',
  },
  {
    title  : 'Does NexGen work with all Shopify stores?',
    content: 'NexGen is designed for all Shopify merchants, from small businesses to large-scale stores, offering tailored recommendations.',
  },
  {
    title  : 'Can I bulk-enhance all my products?',
    content: 'Yes! The \'Express Enhance\' feature allows you to optimize all products at once, with the option to review changes later.',
  },
  {
    title  : 'How often does NexGen update product insights?',
    content: 'NexGen runs daily updates on product data, ensuring you get the latest market trends and performance metrics.',
  },
  {
    title  : 'Does NexGen support multiple languages?',
    content: 'Yes, NexGen can generate and optimize product descriptions in multiple languages to improve global reach.',
  },
  {
    title  : 'How do I track improvements after using NexGen?',
    content: 'NexGen provides a performance dashboard where you can track SEO improvements, sales trends, and product visibility over time.',
  },
];

const NexGenPage = () =>
  {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
      <>
        <NexGenPricing/>
        <Accordion items={accordionItems}/>
        <Blog/>
      </>
  );
  };

export default NexGenPage;