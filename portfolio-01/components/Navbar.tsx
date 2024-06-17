import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

interface NavbarProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavbarProps) => {
  const pathname = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {routes.map((route) => (
        <Link
          href={route.path}
          key={route.name}
          className={`capitalize ${linkStyles}`}
        >
          {route.name}
          {route.path === pathname && (
            <motion.span
              layoutId="underline"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              className={`${underlineStyles}`}
            />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
