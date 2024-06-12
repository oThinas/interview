'use client';

import { useCallback, useState } from 'react';
import { ChildComponent } from './child-component';

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Olá');

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleText = useCallback(() => {
    setText((prev) => prev.concat('!'));
  }, []);

  return (
    <div>
      <button onClick={handleCount} className="border border-white">
        Incrementar contador
      </button>

      <button onClick={handleText} className="border border-white">
        Adicionar exclamação
      </button>

      <ChildComponent count={count} />

      <p>
        {text}
      </p>
    </div>
  );
}
