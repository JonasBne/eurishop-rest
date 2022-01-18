const sortBy = (data: any[], sortExpression: string | null | undefined) => {
  const sortedData = [...data];
  sortedData.sort(() => {
    if (sortExpression?.includes("+")) {
      return 1;
    }
    if (sortExpression?.includes("-")) {
      return -1;
    }
    return 0;
  });
  return sortedData;
};

export default sortBy;
