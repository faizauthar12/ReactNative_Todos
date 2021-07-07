import React, {useState} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export interface BottomNavbarProps extends TouchableOpacityProps {
  onModalPress(on: Boolean): void;
}

const BottomNavbar = ({onModalPress, ...props}: BottomNavbarProps) => {
  const on: Boolean = true;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        {...props}
        style={styles.Button}
        onPress={() => {
          onModalPress(on);
        }}>
        <Text style={styles.text}>Tambah Pekerjaan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    bottom: 0,
    height: windowHeight * 0.1,
  },
  Button: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D1FF',
  },
  text: {
    padding: 10,
  },
});

export default BottomNavbar;
