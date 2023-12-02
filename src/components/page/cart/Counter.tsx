import React, { MutableRefObject, useRef } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface CounterProps {
  count: number;
  setCount: (prevCount: number) => void;
}

const Counter = ({ count, setCount }: CounterProps) => {
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
    <div className={'flex flex-row gap-2'}>
      <Button disabled={minusDisabled} className={'px-4'} onClick={handleDecrement}>
        -
      </Button>
      <Input
        type={'number'}
        ref={ref}
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
        className={'w-full'}
      />
      <Button disabled={plusDisabled} className={'px-4'} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Counter;
