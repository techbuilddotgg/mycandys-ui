import React from 'react';

const Loading = () => {
  return (
    <div className={'flex flex-col items-center gap-2'}>
      <div className="h-4 w-[500px] overflow-hidden rounded-md bg-emerald-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="h-full animate-pulse bg-blue-500"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
