import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function UnAuthorized401() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.error}>Unauthenticated Account (401)</Text>

      <TouchableOpacity
        onPress={() => router.replace('/login')}
        style={{ backgroundColor: 'green', padding: 20, width: '100%', marginTop: 'auto' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    marginTop: 100,
    fontSize: 32,
    width: 250,
    textAlign: 'center'
  }
})