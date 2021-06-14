/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Alert,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TextInput,
  Text,
} from 'react-native';

import {Icon, Input} from 'react-native-elements';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = props => {
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      {/* authen section */}
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#FFF7',
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 10,
          padding: 16,
        }}>
        {/* Username Input */}
        <StreamEntry icon="user" hint="User" onChanged={text=>console.log("Username: " + text)} />

        {/* Password Input */}
        <StreamEntry icon="lock" hint="Password" isPassword={true} />

        <View style={{marginTop: 30}} />
        <Button title="Register" 
            onPress={() => {}}
        />

        <View style={{marginTop: 16}} />
        <TouchableOpacity style={{height: 30}}>
          <Text style={{textAlign: 'center'}}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
        style={{width: '100%'}}
      />
    </ImageBackground>
  );
};

export default RegisterScreen;

type StreamENtryProps = {
    icon: string,
    hint: string,
    isPassword?: boolean
    onChanged?: (text: string) => void;
}

//Custom input component
const StreamEntry:React.FC<StreamENtryProps> = props => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* icon */}
        <Icon name={props.icon} size={35} color="#0007" style={{marginRight: 8}}/>
        <Input
            onChangeText={props.onChanged}
          placeholder={props.hint}
          containerStyle={{flex: 1}}
          keyboardType={props.isPassword?'default':'email-address'}
          secureTextEntry={props.isPassword}
        />
      </View>

    );
};