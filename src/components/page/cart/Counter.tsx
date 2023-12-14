'use client';
import React, { MutableRefObject, useRef } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { classnames } from '@/utils/classnames';

interface CounterProps {
  count: number;
  setCount: (prevCount: number) => void;
  className?: string;
}

const Counter = ({ count, setCount, className }: CounterProps) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const minusDisabled = count === 1;
  const plusDisabled = count === 10;

  const handleIncrement = () => {
    ref.current.stepUp(1);
    setCount(parseInt(ref.current.value));
  };

  const handleDecrement = () => {
    ref.current.stepDown(1);
    setCount(parseInt(ref.current.value));
  };

  return (
    <div className={classnames('flex flex-row gap-2', className ?? '')}>
      <Button
        disabled={minusDisabled}
        className={'h-[48px] w-[48px] bg-emerald-300 px-4'}
        onClick={handleDecrement}
      >
        -
      </Button>
      <Input
        type={'number'}
        ref={ref}
        value={count}
        disabled={true}
        className={'w-[80px] p-2'}
      />
      <Button
        disabled={plusDisabled}
        className={'h-[48px] w-[48px] bg-emerald-300 px-4'}
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
