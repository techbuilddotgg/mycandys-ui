export const classnames = (...args: string[]) => {
  return args.filter(Boolean).join(' ');
};