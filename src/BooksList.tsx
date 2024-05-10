import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

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

const BookCard = ({
  book,
  onPress,
}: {
  book: BookProps;
  onPress: (id: number) => void;
}) => {
  // Force thumbnails to load over HTTPS as required by Apple
  const uri = [
    book.thumbnail.path.replace('http', 'https'),
    book.thumbnail.extension,
  ].join('.');

  return (
    <TouchableHighlight style={styles.card} onPress={() => onPress(book.id)}>
      <Image style={styles.image} source={{uri}} />
    </TouchableHighlight>
  );
};

const BooksList = (props: {navigation: any; books: Array<BookProps>}) => {
  const onPress = (bookId: number) => {
    props.navigation.navigate('Book', {id: bookId});
  };
  return (
    <View style={styles.list}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={props.books}
        renderItem={({item}) => (
          <BookCard key={item.id} book={item} onPress={onPress} />
        )}
      />
    </View>
  );
};

export default BooksList;
