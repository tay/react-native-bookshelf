function reducer(state: State, action: Action) {
  console.log(`REDUCING ${action.type}`);

  switch (action.type) {
    case 'BOOKS_FETCH_REQUESTED':
      return {
        isLoading: true,
      };
    case 'BOOKS_FETCH_SUCCEEDED':
      const books = action.books;
      return {
        isLoading: false,
        books: books,
      };
    default:
      return state;
  }
}

export default reducer;
