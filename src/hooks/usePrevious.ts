import { useEffect, useRef } from "react";

export default function usePrevious(value: string | number | boolean) {
  const ref = useRef<string | number | boolean>();
  useEffect(() => {
    if (ref.current) {
      ref.current = value;
    }
  });
  return ref.current;
}
