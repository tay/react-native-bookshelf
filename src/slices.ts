const selectIsLoading = (state: State) => {
  return state.isLoading;
};

const selectBookById = (state: State, id: number) => {
  return state.books.find(book => book.id === id);
};

const selectBooksByType = (state: State, filter: string) => {
  console.log('selectBooksByType', filter);

  return state.books.filter(book => {
    console.log('selectBooksByType', book);
    return true;
  });
};

const selectActiveBooks = (state: State) => {
  const filter = state.filter;
  if (filter) {
    return selectBooksByType(state, state.filter);
  } else {
    return state.books;
  }
};

export {selectIsLoading, selectBookById, selectActiveBooks};
