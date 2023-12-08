export const getCookie = (key: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`__${key}=`))
    ?.split('=')[1];
};

export const setCookie = (key: string, value: string) => {
  document.cookie = `__${key}=${value}; path=/`;
};

export const cookieOptions = {
  httpOnly: true,
  ...(process.env.NODE_ENV === 'development'
    ? { secure: false }
    : { secure: true }),
};

export const getExpiryDate = (numOfDays = 30) => {
  const date = new Date();
  date.setDate(date.getDate() + numOfDays);
  return date;
};
