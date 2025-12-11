import { useCallback, useRef, useState } from "react";

interface UseCompositionOptions<T = HTMLElement> {
  onCompositionStart?: (event: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (event: React.CompositionEvent<T>) => void;
}

export function useComposition<T = HTMLElement>(
  options: UseCompositionOptions<T> = {}
) {
  const [isComposing, setIsComposing] = useState(false);
  const isComposingRef = useRef(false);

  const onCompositionStart = useCallback(
    (event: React.CompositionEvent<T>) => {
      setIsComposing(true);
      isComposingRef.current = true;
      options.onCompositionStart?.(event);
    },
    [options]
  );

  const onCompositionEnd = useCallback(
    (event: React.CompositionEvent<T>) => {
      setIsComposing(false);
      isComposingRef.current = false;
      options.onCompositionEnd?.(event);
    },
    [options]
  );

  return {
    isComposing,
    isComposingRef,
    onCompositionStart,
    onCompositionEnd,
  };
}
