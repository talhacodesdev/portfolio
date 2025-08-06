import { FourBorder } from '@/components/four-border';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className=" h-dvh w-full">
      <div className=" flex justify-center items-center h-full">
        <div className="w-[90%] max-w-sm">
          <FourBorder>
            <div className="bg-card/75 p-6">
              <h1 className="text-2xl text-center">404 Not Found</h1>
              <p className="text-sm text-center text-muted-foreground">
                Page not found
              </p>
              <Link href="/" className="flex justify-center mt-2.5">
                <Button variant="outline" className="border border-dashed">
                  <MoveLeft /> Go Back
                </Button>
              </Link>
            </div>
          </FourBorder>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
