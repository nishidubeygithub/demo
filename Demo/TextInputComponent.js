import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

const TextInputComponent = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
            {/* <Image source={props.data} style={styles.name}/> */}
            <View style = {styles.email}> 
      <TextInput
        placeholder={props.placeholder}
        style={styles.placeholder}
        secureTextEntry={props.secureTextEntry}
        onBlur={props.onBlur}
        value={props.value}
        onChangeText={props.onChangeText}/>
    </View>
     </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginLeft: 1,
    },
  placeholder: {
    marginLeft: 2,
    },
  email: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'purple',
    width: 340,
    height: 35,
    marginLeft: 10,
    marginRight: 5,
  },
});

export default TextInputComponent;
