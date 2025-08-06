import ClipPathImage from '@/components/clip-pathe-image';
import { FourBorder } from '@/components/four-border';
import PathInfo from '@/components/path-info';
import { TextFade } from '@/components/text-feade';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

const funnyText = [
  'Fueled by ☕, focused on 💻, and occasionally lost in 🔍 console logs',
  'Proudly coding with ❤️ and a sprinkle of 🌟',
  'Building the web one bug at a time 🐞 → 🛠️',
  'I turn caffeine ☕ into clean code and real-world solutions 🚀',
  ' Writing code that even future me <strong><i>hopefully</i></strong> understands 😅',
];

const Page = () => {
  const randomText = funnyText[Math.floor(Math.random() * funnyText.length)];

  return (
    <div className="h-auto  w-full">
      <PathInfo />
      <div className="px-3 mb-3 flex flex-col space-y-7">
        <div>
          <FourBorder>
            <div className="bg-card/75 p-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-auto mx-auto md:mx-0 md:w-1/3 flex justify-center  items-center">
                  <ClipPathImage />
                </div>
                {/* Info */}
                <TextFade direction="up" className="flex-1 text-sm space-y-3">
                  <h2 className="text-xl font-semibold">
                    Hello! I'm <span>Talha</span> 👋
                  </h2>
                  <Balancer>
                    I'm a <strong>Full Stack Developer</strong> with a passion
                    for building modern, responsive, and scalable web
                    applications.
                  </Balancer>

                  <Balancer>
                    With <strong>2+ years</strong> of hands-on experience, I'm
                    continuously refining my craft to build performant and
                    intuitive web applications.
                  </Balancer>

                  <Balancer>
                    I create <strong>practical apps</strong> that solve real
                    problems—for personal use, professional goals, and business
                    growth.
                  </Balancer>

                  {/* <p className="text-pretty">
                    I create{' '}
                    <strong className=" text-violet-400">practical apps</strong>{' '}
                    that solve real problems—for personal use</strong>,{' '}
                    <strong>professional goals</strong>, and{' '}
                    <strong>business growth</strong>.
                  </p> */}

                  {/* <p
                    dangerouslySetInnerHTML={{ __html: randomText }}
                    className="text-muted-foreground"
                  /> */}
                </TextFade>
              </div>
              {/* <div className=" mt-4 grid grid-cols-3 gap-5">
                <div className="bg-muted border border-dashed px-1 py-2">
                  <p className="flex items-center  ">
                    <Book />
                    <p>Book</p>
                  </p>
                  <p className="text-muted-foreground">Holy Quran</p>
                </div>
                <div className="bg-muted border border-dashed">
                  <Book />
                  <p>Reading Book</p>
                </div>
              </div> */}
            </div>
          </FourBorder>
        </div>

        <div>
          <h2 className="bg-secondary w-fit p-1.5 border border-dashed mb-4 text-lg">
            Certificate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certificate Item 1 */}
            <div className="relative group w bg-card/75 p-1 border border-dashed overflow-hidden">
              <div className="aspect-[4/3] w relative">
                <Image
                  src="/Programming Hero - Level-1.png"
                  alt="certificate"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in"
                />
              </div>
              <Link
                href="/Programming Hero - Level-1.pdf"
                download
                className="absolute inset-0 flex items-center justify-center
      bg-muted/80 px-4 text-sm sm:text-base
      opacity-100 md:opacity-0 md:group-hover:opacity-100
      transition-opacity duration-300 ease-in">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-1 cursor-pointer">
                  Download PDF <Download className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Certificate Item 2 */}
            <div className="relative group w bg-card/75 p-1 border border-dashed overflow-hidden">
              <div className="aspect-[4/3] w relative">
                <Image
                  src="/Programming Hero - Level-2.png"
                  alt="certificate"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in"
                />
              </div>
              <Link
                href="/Programming Hero - Level-2.pdf"
                download
                className="absolute inset-0 flex items-center justify-center
        bg-muted/80 px-4 text-sm sm:text-base
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300 ease-in">
                <Button
                  variant="default"
                  size="sm"
                  className="gap-1 cursor-pointer">
                  Download PDF <Download className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="bg-secondary w-fit p-1.5 border border-dashed mb-4 text-lg">
            Hobbies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/75 border border-dashed  px-4 py-2 ">
              <h2 className="text-md">📖 Reading Quran</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2">
              <h2 className="text-md">🕌 Performing Salah (Namaz)</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2 ">
              <h2 className="text-md">🏡 Village Life Lover</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2">
              <h2 className="text-md">💻 Code is my language</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2 ">
              <h2 className="text-md">🍖 Beef Lover</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2">
              <h2 className="text-md">🌱 I love to travel in nature</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2">
              <h2 className="text-md">🛵 Riding Motorbikes</h2>
            </div>
            <div className="bg-card/75 border border-dashed  px-4 py-2">
              <h2 className="text-md">🏰 Playing Clash Royale</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
