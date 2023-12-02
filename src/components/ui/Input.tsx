import { forwardRef, InputHTMLAttributes } from 'react';
import { classnames } from '@/utils/classnames';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classnames(
        'w-[500px] rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none',
        props.className ?? '',
      )}
    />
  );
});

export default Input;
