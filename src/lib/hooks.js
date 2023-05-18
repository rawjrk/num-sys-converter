import { useState, useEffect } from "react";
import { load, save } from "./storage";

// eslint-disable-next-line import/prefer-default-export
export const useCachedState = (storageKey, initValue) => {
  const key = `numsys-cache-${storageKey}`;
  const [value, setValue] = useState(load(key) ? load(key) : initValue);

  useEffect(() => {
    save(key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};
