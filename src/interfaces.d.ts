type Book = {
  id: number;
  dates: Array<any>;
  isbn: string;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: Array<any>;
  };
  pageCount: number;
};

type State = {
  books: Array<Book>;
  isLoading: boolean;
  filter: string;
  filteredBooksIds: Array<number>;
};

type Navigation = any;

type RouteType = {params: Object};
