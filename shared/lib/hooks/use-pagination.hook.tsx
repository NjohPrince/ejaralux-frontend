import { useState, useMemo } from "react";

/**
 * Returns an object with the following properties:
 *
 * - `currentPage`: The current page number (starting from 1).
 * - `totalPages`: The total number of pages.
 * - `currentItems`: The items of the current page.
 * - `goToPage`: A function to go to a specific page (valid page numbers are 1 to `totalPages`).
 * - `setCurrentPage`: A function to set the current page (valid page numbers are 1 to `totalPages`).
 *
 * The hook takes two parameters:
 *
 * - `items`: The array of items to be paginated.
 * - `itemsPerPage`: The number of items to display on each page. Defaults to `10`.
 *
 * @param {T[]} items The array of items to be paginated.
 * @param {number} [itemsPerPage=10] The number of items to display on each page.
 * @returns {Object} An object with the specified properties.
 */
export function usePaginationHook<T>(
  items: T[],
  itemsPerPage: number = 10
): {
  currentPage: number;
  totalPages: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  setCurrentPage: (page: number) => void;
} {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [currentPage, items, itemsPerPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    setCurrentPage,
  };
}
