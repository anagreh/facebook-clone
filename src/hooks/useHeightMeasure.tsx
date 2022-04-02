import React, { useEffect, useRef, useState } from 'react';

export const useHeightMeasure = (
  deps?: React.DependencyList | undefined,
): [React.RefObject<HTMLLIElement>, number | undefined] => {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (ref.current) setHeight(ref.current?.offsetHeight);
  }, [ref, deps]);

  return [ref, height];
};
