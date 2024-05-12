import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
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
  page: {
    flex: 1,
    backgroundColor: '#ffc', // DEBUG
  },
  container: {
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
  const accessibilityLabel = `Go to Book Details for ${book.title}`;

  return (
    <TouchableHighlight
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="imagebutton"
      style={styles.card}
      onPress={() => navigateToBook(book.id)}>
      <Image style={styles.image} source={{uri: getThumbnailUri(book)}} />
    </TouchableHighlight>
  );
};

const BooksListView = (props: {
  navigateToBook: (bookId: number) => void;
  books: Array<Book>;
}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar />
      <FlatList
        numColumns={3}
        data={props.books}
        style={styles.container}
        renderItem={({item}) => (
          <BookCard
            key={item.id}
            book={item}
            navigateToBook={props.navigateToBook}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default BooksListView;
