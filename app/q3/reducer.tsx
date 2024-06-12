interface State {
  count: number;
  showText: boolean;
}

export interface Action {
  type: 'increment' | 'decrement' | 'toggleShowText';
}

export const initialState: State = {
  count: 0,
  showText: true,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'decrement': {
      return { ...state, count: state.count - 1 };
    }

    case 'increment': {
      return { ...state, count: state.count + 1 };
    }

    case 'toggleShowText': {
      return { ...state, showText: !state.showText };
    }

    default: {
      throw new Error('Action not implemented');
    }
  }
}
