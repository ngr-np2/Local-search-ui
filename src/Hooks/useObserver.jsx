import { useEffect, useRef, useState } from "react";

export function useObserver(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    const element = ref.current;

    if (!element) {
      return;
    }

    observer.current.observe(element);

    return () => {
      observer.current.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}
