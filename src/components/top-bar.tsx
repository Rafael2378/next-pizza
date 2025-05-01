<<<<<<< HEAD
import React from "react";
import { Container } from "@/components/ui";
import { Categories, SortPopup } from "@/components";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div
      className={cn("sticky top-0 py-3 z-50 bg-white shadow-2xs", className)}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
=======
import React from 'react';
import { Container } from '@/components/ui';
import { Categories, SortPopup } from '@/components';

interface Props {
     className?: string;
}

export const TopBar: React.FC<Props> = (props) => {
     const {className} = props;
     return (
        <div className={className}>
            <Container className='flex items-center justify-between'>
                <Categories />
                <SortPopup />               
            </Container>
        </div>
    );
}
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50
