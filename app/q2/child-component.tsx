import { memo } from 'react';

interface ChildComponentProps {
  count: number;
}


export const ChildComponent = memo((props: ChildComponentProps) => {
  console.log('ChildComponent renderizado');

  return (
    <div>
      {props.count}
    </div>
  );
});

ChildComponent.displayName = 'ChildComponent';
