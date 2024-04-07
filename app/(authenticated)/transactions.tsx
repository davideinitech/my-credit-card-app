import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Stack } from 'expo-router'
import { Transaction, generateTransactions } from '@/components/mocks/transactions'
import CreditCard from '@/components/CreditCard'
import { AuthContext } from '@/components/AuthContext'

export default function transactions() {
  const { setAuthenticated } = useContext(AuthContext)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    setTransactions(generateTransactions(40))
  }, [])


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Stack.Screen options={{ headerTransparent: true, title: '' }} />

      <CreditCard cardNumber='4580 1010 0101 1234' onPress={() => { }} fullSize={true} />

      <Text style={{ fontSize: 32, marginTop: 20 }}>Transactions</Text>

      <ScrollView style={{ flex: 1, paddingHorizontal: 10, width: '100%' }}>
        {transactions.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.itemData}>{
              item.date.toLocaleString()
                .replace(`.${new Date().getFullYear()},`, ' -')
                .replace(/:\d+$/, '')
            }</Text>
            <Text style={[styles.itemData, { flex: 1 }]}>{item.merchant}</Text>
            <Text style={[styles.itemData, { flex: 1 }]}>{item.category}</Text>
            <Text style={[styles.itemData, { width: 50, textAlign: 'right' }]}>{item.amount}</Text>
            <Text style={[styles.itemData, { width: 20 }]}>{item.currency === 'USD' ? '$' : item.currency}</Text>
          </View>
        ))}


      </ScrollView>

      <TouchableOpacity
        onPress={() => setAuthenticated(false)}
        style={{ backgroundColor: 'red', padding: 20, width: '100%' }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    marginVertical: 5,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 3
    // justifyContent: 'space-between'
  },
  itemData: {
    padding: 5,
    width: '20%',
    fontSize: 16
  }
})