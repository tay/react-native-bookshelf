import {put, takeLatest} from 'redux-saga/effects';
import booksJson from './stubs/books.json';

const BOOKS_FETCH_REQUESTED = 'BOOKS_FETCH_REQUESTED';
const BOOKS_FETCH_SUCCEEDED = 'BOOKS_FETCH_SUCCEEDED';
const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED';

const WHITELISTED_FIELDS = [
  'id',
  'title',
  'format',
  'isbn',
  'pageCount',
  'thumbnail',
  'creators',
  'dates',
];

// worker Saga: will be fired on BOOKS_FETCH_REQUESTED actions
function* fetchBooks(_action: Action) {
  try {
    const results = booksJson.data.results;
    const books = results.map(book => {
      return WHITELISTED_FIELDS.reduce((acc, field) => {
        // @ts-ignore
        acc[field] = book[field];
        return acc;
      }, {});
    });
    yield put({type: BOOKS_FETCH_SUCCEEDED, books: books});
  } catch (e) {
    yield put({type: BOOKS_FETCH_FAILED, message: e.message});
  }
}

/*
  Does not allow concurrent fetches of Books. If "BOOKS_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooks);
}

export default mySaga;
