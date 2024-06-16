import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" height={54} width={54} alt="Logo" />
    </Link>
  );
};

export default Logo;
