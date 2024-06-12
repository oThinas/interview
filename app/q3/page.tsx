'use client';

import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { useCallback, useReducer } from 'react';
import { Action, initialState, reducer } from './reducer';
import { Table } from './table';

export default function Page() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = useCallback((type: Action['type']) => {
    dispatch({ type });
  }, [dispatch]);

  return (
    <div className="w-full">
      <Header description={QUESTIONS.q3} />

      <Table />

      <hr />

      <p>
        {state.showText && state.count}
      </p>

      <button className="border border-white" onClick={() => handleDispatch('decrement')}>
        -
      </button>

      <button className="border border-white" onClick={() => handleDispatch('increment')}>
        +
      </button>

      <button className="border border-white" onClick={() => handleDispatch('toggleShowText')}>
        Mostrar texto
      </button>
    </div>
  );
}
