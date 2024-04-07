import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { Transaction, generateTransactions } from '@/components/mocks/transactions'
import CreditCard from '@/components/CreditCard'

export default function transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    setTransactions(generateTransactions(40))
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <CreditCard onPress={() => { }} />
      <Text style={{ fontSize: 32, marginTop: 20 }}>Transactions</Text>

      <ScrollView style={{ flex: 1 }}>
        {transactions.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text>{item.date.toDateString()}</Text>
            <Text>{item.merchant}</Text>
            <Text>{item.category}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.currency}</Text>
          </View>
        ))}


      </ScrollView>

      <Link href="/login" replace asChild>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 20, width: '100%' }}>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>Logout</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%'
  }
})