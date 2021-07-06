import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export interface SearchBarProps extends TextInputProps {}

const SearchBar = ({
  autoCorrect = false,
  autoCapitalize = 'none',
  placeholder = 'Cari hal yang akan kamu lakukan',
  style,
  ...props
}: SearchBarProps) => {
  return (
    <TextInput
      {...props}
      style={StyleSheet.flatten([styles.inputStyle, style])}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    paddingStart: 15,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
