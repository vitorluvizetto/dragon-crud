export const convertToLocaleDate = (date: string) => {
  const newDate = new Date(date);

  const day = newDate.toLocaleDateString();
  const hours = newDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${day} às ${hours}`;
};
