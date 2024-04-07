import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CreditCard from '@/components/CreditCard'

export default function overview() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 32, marginTop: 20 }}>overview</Text>

      <CreditCard onPress={() => router.push('/transactions')} />


      <Link href="/login" replace asChild>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 20, width: '100%' }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}