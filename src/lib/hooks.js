import { useState, useEffect } from "react";
import { load, save } from "./storage";

export const useCachedState = (storageKey, initValue) => {
  const key = `numsys-cache-${storageKey}`;
  const [value, setValue] = useState(load(key) ? load(key) : initValue);

  useEffect(() => {
    save(key, value);
  }, [value]);

  return [value, setValue];
};
