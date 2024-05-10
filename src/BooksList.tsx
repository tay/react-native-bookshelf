import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';

type BookProps = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
    paddingBottom: 0,
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

const BookCard = ({book}: {book: BookProps}) => {
  // Force thumbnails to load over HTTPS as required by Apple
  const uri = [
    book.thumbnail.path.replace('http', 'https'),
    book.thumbnail.extension,
  ].join('.');

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri}} />
    </View>
  );
};

const BooksList = (props: {books: Array<BookProps>}) => {
  return (
    <View style={styles.list}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={props.books}
        renderItem={({item}) => <BookCard key={item.id} book={item} />}
      />
    </View>
  );
};

export default BooksList;
