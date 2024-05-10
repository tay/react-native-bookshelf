const selectIsLoading = (state: State) => {
  return state.isLoading;
};

const selectBookById = (state: State, id: number) => {
  return state.books.find(book => book.id === id);
};

const selectBooksByType = (state: State, filter: string) => {
  return state.books.filter(book => book.format === filter);
};

const selectFormats = (state: State) => {
  return state.books.reduce((acc: Array<string>, book) => {
    const format = book.format;
    if (!acc.includes(format)) {
      acc.push(format);
    }
    return acc;
  }, []);
};

const selectActiveBooks = (state: State) => {
  const filter = state.filter;
  if (filter) {
    return selectBooksByType(state, state.filter);
  } else {
    return state.books;
  }
};

export {selectIsLoading, selectBookById, selectActiveBooks, selectFormats};
