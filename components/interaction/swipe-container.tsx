'use client';

import { useState, useRef, ReactNode } from 'react';

type SwipeContainerProps = {
  length: number;
  children: (index: number) => ReactNode;
};

export default function SwipeContainer({
  length,
  children,
}: SwipeContainerProps) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const startTime = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startTime.current = Date.now();
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - startX.current;
    const elapsed = Date.now() - startTime.current;
    const velocity = Math.abs(diffX) / elapsed;

    if (Math.abs(diffX) > 50 || velocity > 0.5) {
      setIndex((prev) =>
        diffX < 0
          ? (prev + 1) % length
          : (prev - 1 + length) % length
      );
    }
  };

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {children(index)}
    </div>
  );
}
