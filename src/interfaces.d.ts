type Book = {
  id: number;
  title: string;
  format: string;
  isbn: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: Array<any>;
  };
  dates: Array<any>;
};

type State = {
  books: Array<Book>;
  isLoading: boolean;
  filter: string;
};

type Action = {
  type: string;
  books?: Array<Book>;
  filter?: string;
};

// TODO: Use React Type Interfaces
type Navigation = any;

type Route = {
  params: {
    id?: number;
  };
};

type ScreenProps = {
  navigation: Navigation;
  route: Route;
};
