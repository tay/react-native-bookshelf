import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type BookCardProps = {
  book: {
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    flexBasis: '33.3%',
    borderStyle: 'solid',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'stretch',
  },
});

const BookCard = ({book}: BookCardProps) => {
  // Force thumbnails to load over HTTPS as required by Apple
  const uri = [
    book.thumbnail.path.replace('http', 'https'),
    book.thumbnail.extension,
  ].join('.');

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};

const BooksList = (props: {books: Array<any>}) => {
  return (
    <View style={styles.list}>
      {props.books.map((book, _i) => (
        <BookCard key={book.id} book={book} />
      ))}
    </View>
  );
};

export default BooksList;
