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
    <div className={classnames('flex w-[180px] flex-row gap-2', className ?? '')}>
      <Button disabled={minusDisabled} className={'w-[50px] px-4'} onClick={handleDecrement}>
        -
      </Button>
      <Input
        type={'number'}
        ref={ref}
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className={'w-fit p-2'}
      />
      <Button disabled={plusDisabled} className={'w-[50px] px-4'} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Counter;
