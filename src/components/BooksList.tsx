import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import {getThumbnailUri, THUMBNAIL_ASPECT_RATIO} from './utils';

const CONTAINER_PADDING = 20;
const CARD_MARGIN = 20;

const cardWidth =
  (Dimensions.get('window').width - CONTAINER_PADDING * 2 - 2 * CARD_MARGIN) /
  3;
const cardHeight = cardWidth * THUMBNAIL_ASPECT_RATIO;

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: CONTAINER_PADDING - CARD_MARGIN / 2,
    paddingVertical: CONTAINER_PADDING,
  },
  card: {
    borderStyle: 'solid',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: CARD_MARGIN / 2,
    marginBottom: CARD_MARGIN,
    width: cardWidth,
    height: cardHeight,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});

const BookCard = ({
  book,
  navigateToBook,
}: {
  book: Book;
  navigateToBook: (id: number) => void;
}) => {
  return (
    <TouchableHighlight
      style={styles.card}
      onPress={() => navigateToBook(book.id)}>
      <Image style={styles.image} source={{uri: getThumbnailUri(book)}} />
    </TouchableHighlight>
  );
};

const BooksList = (props: {
  navigateToBook: (bookId: number) => void;
  books: Array<Book>;
}) => {
  return (
    <FlatList
      numColumns={3}
      data={props.books}
      style={styles.flatList}
      renderItem={({item}) => (
        <BookCard
          key={item.id}
          book={item}
          navigateToBook={props.navigateToBook}
        />
      )}
    />
  );
};

export default BooksList;
