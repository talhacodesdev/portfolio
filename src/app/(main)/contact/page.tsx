import { FourBorder } from '@/components/four-border';
import PathInfo from '@/components/path-info';
import { Separator } from '@/components/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Page = () => {
  return (
    <div className="h-dvh md:h-dvh w-full">
      <PathInfo />
      <div className="px-3 mb-3 flex flex-col space-y-7">
        <div className="w-fit mx-auto">
          <FourBorder>
            <div className="p-4 bg-background space-y-3.5">
              <h2 className="flex items-center gap-2">
                <Phone className="size-5" />
                01300402579, 01812931537
              </h2>
              <h2 className="flex items-center gap-2">
                <Mail className="size-5" />
                talhacodes.dev@gmail.com
              </h2>
              <address className="flex items-center gap-2">
                <MapPin className="size-5" />
                Gandaria, Dhaka, Bangladesh
              </address>
            </div>
          </FourBorder>
        </div>
        <div className="flex flex-col items-center space-y-5 ">
          <div className="group relative w-full">
            <label
              htmlFor="name"
              className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
              <span className="bg-background inline-flex px-1">Name</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder=" "
              className="!bg-background"
            />
          </div>
          <div className="group relative w-full ">
            <label
              htmlFor="email"
              className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
              <span className="bg-background inline-flex px-1">Email</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder=" "
              className="!bg-background"
            />
          </div>
          <div className="group relative w-full ">
            <label
              htmlFor="message"
              className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium">
              <span className="bg-background inline-flex px-1">Message</span>
            </label>
            <Textarea
              id="message"
              placeholder=""
              className="!bg-background min-h-24"
            />
          </div>
          <Button variant="secondary" className="w-full">
            <Send /> Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
