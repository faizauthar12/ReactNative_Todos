import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const DetailScreen = ({route}) => {
  const {title, desc, date} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text>{date}</Text>
      <Text style={styles.textDesc}>{desc}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  textTitle: {
    fontSize: 20,
  },
  textDesc: {
    marginTop: 10,
  },
});

export default DetailScreen;
