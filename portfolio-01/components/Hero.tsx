import Link from 'next/link';
import { LuArrowDown } from 'react-icons/lu';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import Socials from './Socials';
import DevImg from './DevImg';

import shape01 from '@/hero/shape-1.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex flex-col max-w-[600px] mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm font-semibold tracking-[4px] uppercase text-primary mb-4">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Name is Sarim Ahmed Khan</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              a Chemical Engineer, with interest in Robotics, Art and
              Engineering
            </p>
            <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2 ">
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground hover:text-primary text-[22px] transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative"></div>
        </div>

        {/* icon  */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <LuArrowDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
