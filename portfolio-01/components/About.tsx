import Image from 'next/image';
import DevImg from './DevImg';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Briefcase,
  Calendar,
  GraduationCap,
  MailIcon,
  PhoneCall,
  User2,
  User2Icon,
  Workflow,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 />,
    text: 'Sarim Ahmed Khan',
  },
  {
    icon: <PhoneCall />,
    text: '+92 3132263334',
  },
  {
    icon: <MailIcon />,
    text: 'sarim95khan@gmail.com',
  },
  {
    icon: <Calendar />,
    text: 'Born in  5 May, 1995',
  },
  {
    icon: <GraduationCap />,
    text: 'Bachelor in Chemical Engineering',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Bologna University',
        course: 'Master in BioChemical ENgineering',
        year: '2024 - 2026',
      },
      {
        university: 'Karachi University',
        course: 'Bachelor in Chemical ENgineering',
        year: '2016 - 2020',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        employe: 'Gatron Industries Ltd',
        role: 'Assitant Manager',
        year: 'Sep, 2021 - current',
      },
      {
        employe: 'Artistic Milliniers',
        role: 'Assitant Manager',
        year: 'Jan,2021 - Aug,2021',
      },
    ],
  },
];

const skills = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML/CSS/ NextJs/ Tailwind CSS',
      },
      {
        name: 'Microserver/ Kafka/ docker, docker-compose',
      },
      {
        name: 'IoT/ AI/ Generative AI',
      },
      {
        name: 'Python/ JavaScript/ C++',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        path: '/vscode.svg',
      },
      {
        path: '/figma.svg',
      },
      {
        path: '/notion.svg',
      },
      {
        path: '/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  console.log(getData(qualificationData, 'education'));
  return (
    <section className="xl:h-[840px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About
        </h1>
        <div className=" flex flex-col xl:flex-row ">
          <div className=" hidden xl:flex w-full justify-center flex-1 relative">
            <Image
              src={'/developer.png'}
              alt="developer"
              width={450}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <div className="flex-1 ">
            <Tabs defaultValue="Info">
              <TabsList className="gap-x-2 w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="Info">Personal Info</TabsTrigger>
                <TabsTrigger value="Qualifications">Qualificatiosn</TabsTrigger>
                <TabsTrigger value="Skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent className="w-full xl:w-auto" value="Info">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service quality for 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialized in webdevelopmnet using cutting edge
                      technologies such as NextJs,python, kafka,
                      contentmanagement system like sanity et
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4">
                      {infoData.map((info, index) => (
                        <div
                          key={index}
                          className="flex gap-x-4 mb-4 items-center"
                        >
                          <div className="text-primary">{info.icon}</div>
                          <div>{info.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  className="w-full xl:w-auto"
                  value="Qualifications"
                >
                  <div className="">
                    <h3 className="h3 mb-4">My Journey</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex gap-x-4 uppercase text-primary mb-4 t">
                          <Briefcase />
                          <h4 className="capitalize  text-center xl:text-left">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map(
                            (item: any) => {
                              const { university, course, year } = item;
                              return (
                                <div className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] relative">
                                    <div className="absoulte h-[11px] w-[11px] rounded-full bg-primary -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none text-xl mb-2  ">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {course}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="flex gap-x-4 uppercase text-primary mb-4 t">
                          <Workflow />
                          <h4 className="capitalize  text-center xl:text-left">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map(
                            (item: any) => {
                              const { employe, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] relative">
                                    <div className="absoulte h-[11px] w-[11px] rounded-full bg-primary -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-none text-xl mb-2 ">
                                      {employe}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium ">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent className="w-full xl:w-auto" value="Skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-4">Skills</h4>
                      <div className="boder border-b mb-4" />
                      <div className="text-center">
                        {getData(skills, 'skills').data.map((item: any) => {
                          const { name } = item;
                          return (
                            <div className="w-2/4  mx-auto xl:mx-0 text-center xl:text-left ">
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="">
                      <h4 className="text-xl font-semibold mb-4">Tools</h4>
                      <div className="boder border-b mb-4" />
                      <div className="flex  flex-row gap-x-8 mx-auto xl:mx-0 justify-center xl:justify-start items-center">
                        {getData(skills, 'tools').data.map((item: any) => {
                          const { path } = item;
                          return (
                            <div className="">
                              <Image
                                src={path}
                                alt="dev"
                                height={48}
                                width={48}
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
