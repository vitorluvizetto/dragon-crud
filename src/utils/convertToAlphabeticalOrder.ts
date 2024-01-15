interface ICompare {
  name: string;
}

export const convertToAlphabeticalOrder = (data: ICompare[]) =>
  data.sort((a, b) => a.name.localeCompare(b.name));
