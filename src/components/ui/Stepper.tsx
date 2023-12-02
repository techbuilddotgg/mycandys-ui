'use client';
import React from 'react';
import { useQueryParams } from '@/hooks/useQueryParams';
import { classnames } from '@/utils/classnames';
import { useRouter } from 'next/navigation';

interface Step {
  name: string;
  href: string;
}

interface StepperProps {
  steps: Step[];
}

const Stepper = ({ steps }: StepperProps) => {
  const { urlQuery } = useQueryParams();
  const router = useRouter();

  const isCompleted = (step: Step) => {
    return urlQuery.step > steps.findIndex((s) => s.href === step.href);
  };

  return (
    <div className={'flex flex-row'}>
      {steps.map((step, index) => (
        <div key={index} className={'flex flex-row items-center'}>
          <div
            className={classnames(
              'w-min rounded-full border-2 border-black px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
              isCompleted(step) ? 'cursor-pointer bg-primary' : 'bg-primary-200',
            )}
            onClick={isCompleted(step) ? () => router.push(step.href) : undefined}
          >
            {step.name}
          </div>
          {index !== steps.length - 1 && <div className={'mx-2 h-1 w-8 rounded-3xl bg-black'} />}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
