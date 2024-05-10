export const THUMBNAIL_ASPECT_RATIO = 1.5;

export const getThumbnailUri = (book: Book): string => {
  // Force thumbnails to load over HTTPS as required by Apple
  return [
    book.thumbnail.path.replace('http', 'https'),
    book.thumbnail.extension,
  ].join('.');
};

export default {
  getThumbnailUri,
};
