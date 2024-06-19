import About from '@/components/About';
import Hero from '@/components/Hero';
import {
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react';
import Image from 'next/image';

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML/ CSS/ NextJs/ React',
      },
      {
        name: 'Python, AI',
      },
      {
        name: 'NodeJs/ ExpressJs',
      },
      {
        name: 'DevOps/ docker/ docker-compose',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about',
      },
      {
        imgPath: '/about',
      },
      {
        imgPath: '/about',
      },
      {
        imgPath: '/about',
      },
    ],
  },
];
const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'University of Bologna',
        qualification: 'Master in BioChemical Engineering',
        year: '2024-2026',
      },
      {
        university: 'University of Karachi',
        qualification: 'Bachelor in Engineering',
        year: '2016-2020',
      },
    ],
  },
];
const infoData = [
  {
    icon: <User2 />,
    text: 'Sarim Ahmed Khan',
  },
  {
    icon: <PhoneCall />,
    text: '+92-3132263334',
  },
  {
    icon: <MailIcon />,
    text: 'sarim95khan@gmail.com',
  },
  {
    icon: <GraduationCap />,
    text: 'Bachelor in Chemical Engineering',
  },
  {
    icon: <HomeIcon />,
    text: 'Gulshan Iqbal, Karachi',
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
