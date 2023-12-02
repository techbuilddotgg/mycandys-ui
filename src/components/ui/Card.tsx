import { ReactNode } from 'react';

type Props = {
  heading: string;
  children: ReactNode;
};

export default function Card({ heading, children }: Props) {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-primary font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
