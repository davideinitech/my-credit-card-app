import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UnAuthorized403() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Not Permitted (403)</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  error: {
    fontSize: 32,
    width: 250,
    textAlign: 'center'
  }
})