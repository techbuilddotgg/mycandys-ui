import { ButtonHTMLAttributes, forwardRef } from 'react';
import { classnames } from '@/utils/classnames';

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <button
      ref={ref}
      role="button"
      aria-label="Click to perform an action"
      className={classnames(
        'flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-primary px-2 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
        className ?? '',
      )}
      {...rest}
    />
  );
});

Button.displayName = 'Button';
export default Button;
