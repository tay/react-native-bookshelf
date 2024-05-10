import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  list: {
    padding: 20,
    paddingBottom: 0,
  },
  flatList: {
    justifyContent: 'space-between',
  },
  card: {
    borderStyle: 'solid',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'stretch',
  },
});

const BookCard = ({
  book,
  navigateToBook,
}: {
  book: Book;
  navigateToBook: (id: number) => void;
}) => {
  // Force thumbnails to load over HTTPS as required by Apple
  const uri = [
    book.thumbnail.path.replace('http', 'https'),
    book.thumbnail.extension,
  ].join('.');

  return (
    <TouchableHighlight
      style={styles.card}
      onPress={() => navigateToBook(book.id)}>
      <Image style={styles.image} source={{uri}} />
    </TouchableHighlight>
  );
};

const BooksList = (props: {
  navigateToBook: (bookId: number) => void;
  books: Array<Book>;
}) => {
  return (
    <View style={styles.list}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.flatList}
        data={props.books}
        renderItem={({item}) => (
          <BookCard
            key={item.id}
            book={item}
            navigateToBook={props.navigateToBook}
          />
        )}
      />
    </View>
  );
};

export default BooksList;
