const sortBy = (data: any[], sortExpression: string | null | undefined) => {
  const sortedData = [...data];
  sortedData.sort((a: any, b: any) => {
    if (sortExpression?.includes("+")) {
      if (a[sortExpression.substring(1)] < b[sortExpression.substring(1)]) {
        return -1;
      }
    }
    if (sortExpression?.includes("-")) {
      if (b[sortExpression.substring(1)] < a[sortExpression.substring(1)]) {
        return -1;
      }
    }
    return 0;
  });
  return sortedData;
};

export default sortBy;

// TODO: add a test for undefined data (then just return)
