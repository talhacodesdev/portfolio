import { FourBorder } from '@/components/four-border';
import MenuList from '@/components/menu-list';
import { Separator } from '@/components/separator';
import {
  Discord,
  Facebook,
  GitHub,
  Gmail,
  LinkedIn,
  WhatsApp,
  XformerlyTwitter,
  Telegram,
  DailyDev,
} from '@/icon/icons';
import Link from 'next/link';

const icons = [
  {
    label: 'Facebook',
    icon: <Facebook className="text-muted-foreground text-xl" />,
    href: 'https://www.facebook.com/talhacodesdev',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedIn className="text-muted-foreground text-xl" />,
    href: 'https://www.linkedin.com/in/talhacodesdev/',
  },
  {
    label: 'X',
    icon: <XformerlyTwitter className="text-muted-foreground text-xl" />,
    href: 'https://x.com/talhacodesdev',
  },
  {
    label: 'GitHub',
    icon: <GitHub className="text-muted-foreground text-xl" />,
    href: 'https://github.com/talhaabu1',
  },
  {
    label: 'DailyDev',
    icon: <DailyDev className="text-muted-foreground text-3xl" />,
    href: 'https://app.daily.dev/talhacodesdev',
  },
  {
    label: 'Gmail',
    icon: <Gmail className="text-muted-foreground text-xl" />,
    href: 'mailto:talhacodes.dev@gmail.com?subject=Hello%20Talha&body=I%20loved%20your%20portfolio!',
  },

  {
    label: 'WhatsApp',
    icon: <WhatsApp className="text-muted-foreground text-xl" />,
    href: 'https://wa.me/8801812931537',
  },
  {
    label: 'Telegram',
    icon: <Telegram className="text-muted-foreground text-xl" />,
    href: 'https://t.me/talhacodes',
  },
  // {
  //   label: 'Discord',
  //   icon: <Discord className="text-muted-foreground text-xl" />,
  //   href: 'https://www.facebook.com/rohman.azhar.9',
  // },
];

const Page = () => {
  return (
    <div className="h-dvh w-full">
      <div className="flex justify-center items-center h-full">
        <div className="w-[90%] max-w-sm">
          <FourBorder>
            <div className="bg-card/75 p-6">
              <h1 className="text-2xl text-center">
                {/* <ShinyText text="Talha Codes" speed={5} /> */}
                Talha Codes
              </h1>
              <p className="text-sm text-center text-muted-foreground">
                Full Stack Developer
              </p>
              <Separator
                label={
                  <div className="border px-2 py-1 rounded-full border-dashed my-3">
                    MENU
                  </div>
                }
                gradient
              />
              <MenuList />
              <div>
                <Separator
                  label={
                    <div className="border px-2 py-1 rounded-full border-dashed my-3">
                      Links
                    </div>
                  }
                  gradient
                />
                <div className="flex justify-center items-center gap-x-3 ">
                  {icons.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className=" hover:scale-125 transition  duration-300 ease-[cubic-bezier(0.42,0,1,1)]">
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FourBorder>
        </div>
      </div>
    </div>
  );
};

export default Page;
