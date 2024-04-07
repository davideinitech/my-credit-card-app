import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UnAuthorized401() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.error}>Unauthenticated Account (401)</Text>
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