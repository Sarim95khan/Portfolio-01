import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Logo from './Logo';
import Navbar from './Navbar';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-32 mx-auto ">
            <div className="flex justify-center">
              <Logo />
            </div>

            <Navbar
              containerStyles="flex flex-col gap-y-6 items-center"
              underlineStyles="absolute h-[2px] left-0 top-full bg-primary w-full bg-primary"
              linkStyles="relative text-2xl hover:text-primary transition-all"
            />
            <Socials
              containerStyles="flex gap-x-4 mx-auto"
              iconStyles="text-foreground hover:text-primary text-2xl transition-all"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
