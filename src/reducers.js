function reducer(state, action) {
  console.log(`REDUCING ${action.type}`);

  switch (action.type) {
    case 'BOOKS_FETCH_SUCCEEDED':
      return {books: action.books};
    default:
      return state;
  }
}

export default reducer;
