import { useState, useMemo } from "react";
import Product from "../types/Product";

interface SortConfig {
  key: string;
  order: string;
}

function useSortTableData(data: Product[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    order: "default",
  });

  function requestedSorting(key: string) {
    let order = "default";
    if (sortConfig.key === key && sortConfig.order === "default") {
      order = "ascending";
    }
    if (sortConfig.key === key && sortConfig.order === "ascending") {
      order = "descending";
    }
    if (sortConfig.key === key && sortConfig.order === "descending") {
      order = "default";
    }
    setSortConfig({ key, order });
  }

  const sortedData = [...data];

  useMemo(() => {
    if (sortConfig !== null && sortConfig.order !== "default") {
      sortedData.sort((a: any, b: any) => {
        // TODO: find a better alternative to typecast this
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.order === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.order === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    if (sortConfig !== null && sortConfig.order === "default") {
      sortedData.sort((a: any) => a);
    }
    return sortedData;
  }, [data, sortConfig]);

  return {
    sortConfig,
    requestedSorting,
    sortedData,
  };
}

export default useSortTableData;
