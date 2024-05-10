import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getThumbnailUri, THUMBNAIL_ASPECT_RATIO} from './utils';

const CONTAINER_PADDING = 20;
const imageWidth = Dimensions.get('window').width - CONTAINER_PADDING * 2;
const imageHeight = imageWidth * THUMBNAIL_ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    padding: CONTAINER_PADDING,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
});

const BookDetailCard = ({book}: {book: Book}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: getThumbnailUri(book)}} />
        <Text>Book: {book.title}</Text>
        <Text>Author: {book.creators.items.map(c => c.name).join(', ')}</Text>
        <Text>No. Pages: {book.pageCount}</Text>
        <Text>ISBN: {book.isbn}</Text>
        <Text>Synopsis: Blah de blah</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookDetailCard;
