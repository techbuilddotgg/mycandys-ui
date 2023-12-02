import { ButtonHTMLAttributes, forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return (
    <button
      ref={ref}
      role="button"
      aria-label="Click to perform an action"
      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      {...props}
    />
  );
});

export default Button;
