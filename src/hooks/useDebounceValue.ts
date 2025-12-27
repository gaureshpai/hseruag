import { useCallback, useEffect, useRef, useState } from "react";

export function useDebounceValue<T>(value: T, wait: number) {
  const [_value, setValue] = useState<T>(value);
  const refMounted = useRef<boolean>(false);
  const refTimeout = useRef<number | undefined>();

  const cancel = useCallback(() => window.clearTimeout(refTimeout.current), []);

  useEffect(() => {
    if (refMounted.current) {
      cancel();
      refTimeout.current = window.setTimeout(() => {
        setValue(value);
      }, wait);
    }
  }, [value, wait, cancel]);

  useEffect(() => {
    refMounted.current = true;
    return cancel;
  }, [cancel]);

  return _value;
}
