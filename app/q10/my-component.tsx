'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

interface Item {
  id: number;
  content: string;
}

interface MyComponentProps {
  items: Item[];
}

export function MyComponent(props: MyComponentProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: props.items.length,
    getScrollElement() {
      return parentRef.current;
    },
    estimateSize() {
      return 50;
    },
  });

  return (
    <div ref={parentRef} className="h-96 w-1/4 overflow-auto">
      <div className="relative border" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
          console.log(virtualItem.index);

          return (
            <div
              key={virtualItem.key} className="absolute left-0 top-0"
              style={{ height: `${virtualItem.size}px`, transform: `translateY(${virtualItem.start}px)` }}
            >
              {props.items[virtualItem.index].content} - Row {virtualItem.index}
            </div>
          );
        })}
      </div>
    </div>
  );
}
