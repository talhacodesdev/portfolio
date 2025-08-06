'use client';

import { getPageTitle } from '@/lib/getPageTitle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { MoveLeft } from 'lucide-react';
import { RoughNotation } from 'react-rough-notation';

const PathInfo = () => {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <div className="flex justify-between items-center bg-secondary/70 backdrop-blur-sm p-3 md:mx-3 sticky top-0 z-50 mb-4 border-b border-l border-r border-dashed">
      <Link href="/">
        <Button variant="outline" className="border border-dashed text-md">
          <MoveLeft />
          Back
        </Button>
      </Link>
      <h1 className="text-md">
        <RoughNotation show={true} type="underline">
          {title}
        </RoughNotation>
      </h1>
    </div>
  );
};

export default PathInfo;
