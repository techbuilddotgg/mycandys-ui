export const formatDateString = (
  dateString: string,
  opts = { time: true },
): string | null => {
  if (isNaN(Date.parse(dateString))) {
    return null;
  }

  let options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  if (opts?.time) {
    options = { ...options, hour: 'numeric', minute: 'numeric' };
  }

  const date = new Date(dateString);
  return date.toLocaleDateString('sl-SL', options);
};
