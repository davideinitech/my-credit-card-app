import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props ={onPress:Function}
export default function CreditCard({onPress}:Props) {
  return (
    <TouchableOpacity onPress={()=> onPress()} style={styles.cardContainer}>
      <Text style={styles.status}>Active</Text>
      <Text style={styles.cardNumber}>4580 **** **** 1234</Text>
      <Text>Israel Israeli</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    height: 150,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gold',
    justifyContent: 'space-between'
  },
  cardNumber: {
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 2
  },
  status: {
    padding: 5,
    borderRadius: 3,
    backgroundColor: 'green',
    width: 50,
    color: 'white'
  }
})