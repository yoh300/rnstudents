import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  const lek = {...styles.text, backgroundColor: 'red'};
  return (
    <View style={{backgroundColor: '#FF0', flex: 1, 
    flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', backgroundColor: 'purple', flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white'}}>CodeMobiles1 {Math.random()}</Text>
      <Text style={lek}>CodeMobiles2</Text>
      <Text style={{...styles.text, backgroundColor: 'blue'}}>CodeMobiles3</Text>
      <Text style={styles.text}>CodeMobiles4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {fontSize: 30, fontWeight: 'bold', backgroundColor: 'purple', flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white'}
});