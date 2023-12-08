import React from 'react';
import { classnames } from '@/utils/classnames';

interface AvatarProps {
  className?: string;
}

const Avatar = ({ className }: AvatarProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.truelancer.com/user-picture/2838646-61dc873dc473b.jpg)`,
      }}
      className={classnames(
        'm-auto my-4 h-16 w-16 rounded-full border-2 border-black bg-cover bg-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
        className,
      )}
    />
  );
};

export default Avatar;
