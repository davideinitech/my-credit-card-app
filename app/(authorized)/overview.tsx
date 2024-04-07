import { Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Stack, router } from 'expo-router'
import CreditCard from '@/components/CreditCard'
import { AuthContext } from '@/components/AuthContext'

export default function overview() {
  const { setAuthenticated } = useContext(AuthContext)
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={{ fontSize: 32, marginTop: 100, marginBottom: 50 }}>overview</Text>

      <CreditCard cardNumber='4580 **** **** 1234' onPress={() => router.push('/transactions')} fullSize={false} />

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        onPress={() => setAuthenticated(false)}
        style={{ backgroundColor: 'red', padding: 20, width: '100%' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}