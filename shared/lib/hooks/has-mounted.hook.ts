import { useEffect, useState } from "react";

/**
 * A custom hook that indicates whether the component has mounted.
 *
 * @returns {boolean} - Returns `true` if the component has mounted, otherwise `false`.
 */
export const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
