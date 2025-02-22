import { ADD_BOOK } from './actions';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default booksReducer;
