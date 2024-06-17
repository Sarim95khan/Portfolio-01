import Link from 'next/link';
import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaSquareInstagram,
} from 'react-icons/fa6';

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socialLinks = [
  {
    route: 'https://github.com/Sarim95khan',
    icon: <FaGithub />,
  },
  {
    route: 'https://www.youtube.com/',
    icon: <FaYoutube />,
  },
  {
    route: 'https://www.facebook.com/sarim.khan.562/',
    icon: <FaFacebook />,
  },
  {
    route: 'https://www.linkedin.com/feed/',
    icon: <FaLinkedinIn />,
  },
  {
    route: 'https://www.instagram.com/',
    icon: <FaSquareInstagram />,
  },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((socialLink) => (
        <Link href={socialLink.route}>
          <div className={iconStyles}>{socialLink.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
