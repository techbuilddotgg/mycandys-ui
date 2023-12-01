import { Dispatch, SetStateAction } from 'react';
import { classnames } from '@/utils/classnames';

type Props = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
  className?: string
}

export default function Input({ value, setValue, placeholder }: Props) {
  return (
    <input
      className={classnames('w-[500px] rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none')}
      type='text'
      name='text'
      id='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      aria-label={placeholder}
    />
  );
}
