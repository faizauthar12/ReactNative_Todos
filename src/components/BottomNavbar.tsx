import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TextInputProps,
} from 'react-native';
import KBDismiss from './KBDismiss';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface BottomNavbarProps extends TextInputProps {
  onPress(text: string): void;
}

const BottomNavbar = ({
  autoCorrect = false,
  autoCapitalize = 'none',
  placeholder = 'Apa yang akan kamu lakukan hari ini?',
  onPress,
}: BottomNavbarProps) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.InputStyle}
        onChangeText={text => setText(text)}
        value={text}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
      />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          if (text != '') {
            onPress(text);
            setText('');
            KBDismiss();
          } else {
            console.log('TextInput pada BottomNavbar belum di isi');
          }
        }}>
        <Text style={styles.text}>Tambah</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    bottom: 0,
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: '#fff',
  },
  InputStyle: {
    flex: 2,
    flexGrow: 4,
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    paddingStart: 15,
  },
  Button: {
    flex: 1,
    borderRadius: 10,
    marginStart: 10,
    justifyContent: 'center',
    backgroundColor: '#00D1FF',
  },
  text: {
    padding: 10,
  },
});

export default BottomNavbar;
