export default function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: !state.completed
      };

    case 'UPDATE_TODO':
      const { type, ...newProps } = action;

      return {
        ...state,
        ...newProps
      };

    default:
      return state;
  }
}
