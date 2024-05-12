import {createSelector} from '@reduxjs/toolkit';

const selectIsLoading = (state: State) => {
  return state.isLoading;
};

const selectBooks = (state: State) => {
  return state.books;
};

const selectBookById = (state: State, id: number) => {
  return state.books.find(book => book.id === id);
};

const selectBooksByFormat = (state: State, format: string) => {
  return selectBooks(state).filter(book => book.format === format);
};

const selectFormats = createSelector(selectBooks, books => {
  return books.reduce((acc: Array<string>, book) => {
    const format = book.format;
    if (!acc.includes(format)) {
      acc.push(format);
    }
    return acc;
  }, []);
});

export {
  selectBooks,
  selectBookById,
  selectBooksByFormat,
  selectFormats,
  selectIsLoading,
};
