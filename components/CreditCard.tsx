import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

type Props = { onPress: Function, fullSize: boolean, cardNumber: string }
export default function CreditCard({ onPress, fullSize, cardNumber }: Props) {

  return (


    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.cardContainer,
        fullSize && styles.cardFullSize
      ]}      >
      {!fullSize && <Text style={styles.status}>Active</Text>}
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <Text style={{ fontSize: 18 }}>Israel Israeli</Text>
      <FontAwesome style={{ position: 'absolute', bottom: 5, right: 10 }} name="cc-visa" size={30} color="black" />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
    height: 150,
    width: 300,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gold',
  },
  cardFullSize: {
    width: '100%',
    paddingTop: 70,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  cardNumber: {
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 2
  },
  status: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'green',
    width: 50,
    color: 'white',
    textAlign: 'center'
  }
})