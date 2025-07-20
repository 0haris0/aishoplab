import {SocialMediaProfiles} from '@/components/SocialMedia';


export const navigation = [
  {
    title: 'Work',
    links: [
      {
        title: 'Dashboard Analytics Platform',
        href : '/work/dashboard-analytics',
      },
      {
        title: 'Employee Management System',
        href : '/work/employee-management',
      },
      {
        title: 'Inventory Control System',
        href : '/work/inventory-control',
      },
      {
        title: 'Customer Relationship Portal',
        href : '/work/crm-portal',
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
