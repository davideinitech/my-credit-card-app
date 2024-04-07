import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

export default function login() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('');

  const loginClick = ()=> {
    if(id === '123456789'){
      router.replace('/overview')
    }else{
      router.push('/401')
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 32, marginTop: 20, marginBottom:50 }}>Login</Text>

      <View>
        <Text  style={styles.label}>ID number</Text>
        <TextInput keyboardType='number-pad' style={styles.input} value={id} onChangeText={setId}  />
        <Text  style={styles.label}>Password</Text>
        <TextInput secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      </View>

      <View style={{flex:1}}/>


        <TouchableOpacity
        onPress={loginClick}
          style={{ backgroundColor: 'green', padding: 20, width: '100%' }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  label:{},
  input:{
width:300,
borderWidth:1,
padding:10,
borderRadius:3,
marginBottom:20
  }
})